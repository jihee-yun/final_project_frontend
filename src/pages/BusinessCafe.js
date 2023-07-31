import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../api/AxiosApi";
import { UserContext } from "../context/UserStore";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SideMenu from "../component/SideMenu";
import ChatBot from "../component/ChatBot";
import Sidebar from "../component/Sidebar";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDHiymTV-avTvGv5Oxj3Bghiqw327h8Ac8",
  authDomain: "sweetkingdom-703fb.firebaseapp.com",
  projectId: "sweetkingdom-703fb",
  storageBucket: "sweetkingdom-703fb.appspot.com",
  messagingSenderId: "40592815779",
  appId: "1:40592815779:web:24a07fee4b751465687116"
};

initializeApp(firebaseConfig);
const storage = getStorage();

const OutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 사이드 메뉴 + 세부 페이지
const Container = styled.div`
  width: 95%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;
// 세부 페이지
const Detail = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* border: 2px solid yellow; */
`;
// 카페 등록, 관리 선택 박스
const RowBox = styled.div`
  width: 95%;
  margin-top: 1%;
  margin-bottom: 2%;
  display: flex;
  justify-content: center;
`;
// 포인트 내역, 결제 내역 버튼
const TypeButton = styled.button`
  width: 35%;
  min-width: 150px;
  height: 50px;
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid #7d5a5a;
  border-radius: 15px;
  background-color: ${({ selected }) => (selected ? "#F3E1E1" : "white")};
  cursor: pointer;

  &:hover {
    background-color: #F3E1E1;
  }
`;

// 세부 페이지 윗쪽 부분
const SelectBox = styled.div`
  width: 90%;
  min-width: 330px;
  height: 80px;
  margin-top: 3%;
  border: 1px solid #F3E1E1;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TextBox = styled.p`
  text-align: center;
`;
// 세부 페이지 중앙 부분
const ContentBox = styled.div`
  width: 90%;
  min-width: 330px;
  /* min-height: 600px; */
  margin-top: 3%;
  border: 1px solid #F3E1E1;
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

// 세부 입력 박스
const RegisterBox = styled.div`
  width: 95%;
  margin: 10px;
  border: 1px solid #F3E1E1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;
// 각 박스별 정보 표시 p태크
const InfoType = styled.p`
  width: 80%;
  min-width: 100px;
  text-align: center;
`;
// 회색 바탕의 입력창
const GrayInput = styled.input`
  width: 80%;
  min-width: 200px;
  height: 30px;
  line-height: 30px;
  margin-bottom: 15px;
  padding-left: 10px;
  border: 0;
  background-color: #eee;
  text-align: center;
  &:focus {
    outline: none;
  }
`;
// 자세한 소개 수정 입력창
const DetailInput = styled.input`
  width: 90%;
  min-width: 200px;
  height: 150px;
  &:focus {
    outline: none;
  }
  margin-bottom: 10px;
  padding-left: 5px;
`;
// 라디오 버튼
const RadioInput = styled.input`
  margin: 0 5px;
`;
// 카페 등록 버튼
const InfoChangeButton = styled.button`
  width: 150px;
  height: 40px;
  margin: 5px;
  color: white;
  background-color: #F1D1D1;
  border: 0;
  cursor: pointer;
`;
// 세부 정보들 나열해주는 박스
const SpecificBox = styled.div`
  margin: 20px;
  width: 40%;
  min-width: 300px;
  border: 1px solid #F3E1E1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  @media (max-width: 670px) {
    width: calc(80% - 20px); // 1개를 한 줄에 배치
  }
`;
// 길드 이미지(썸네일)
const CafeImg = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 15px 15px 0 0;
  overflow: hidden;
`;
// 그냥 가로 박스
const CafeRowBox = styled.div`
  width: 90%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: -10px;
`;
// 길드 이름
const CafeName = styled.p`

`;
// 더보기 버튼
const More = styled.p`
  font-size: .6rem;
  height: 10px;
  letter-spacing: -1px;
  margin-left: auto;
  margin-right: 1%;
  cursor: pointer;
`;
// 길드 지역
const CafeRegion = styled.p`
  margin-right: auto;
  margin-bottom: -5px;
  margin-left: 5%;
`;
// 길드 소개
const CafeIntro = styled.p`
  margin-right: auto;
  margin-left: 5%;
`;


const BusinessCafe = () => {
  const navigate = useNavigate();
  // useContext 저장값 불러오기
  const {isSidebar, setIsSidebar} = useContext(UserContext);
  // 로컬 스토리지 저장값 불러오기
  const userNum = localStorage.getItem("userNum");
  const grantType = localStorage.getItem("grantType");
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const userName = localStorage.getItem("userName");
  const userAuthority = localStorage.getItem("userAuthority");
  const isLogin = localStorage.getItem("isLogin");
  
  // 유저 정보 상태 관리
  const [memberInfo, setMemberInfo] = useState(null);
  // 등록, 관리 선택 버튼
  const [selectedButton, setSelectedButton] = useState("register");
  // 포인트, 결제 차이
  const handleTypeButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  }; 
  // 입력값 상태 저장
  const [cafeName, setCafeName] = useState("");
  const [cafeAddress, setCafeAddress] = useState("");
  const [cafeTime, setCafeTime] = useState("");
  const [cafePhone, setCafePhone] = useState("");
  const [cafeIntro, setCafeIntro] = useState("");
  const [cafeDetail, setCafeDetail] = useState("");
  // 라디오 버튼 상태
  const [selectedRegion, setSelectedRegion] = useState('서울특별시');
  const [isButtonActive, setIsButtonActive] = useState(false);
  // 이미지 업로드용 상태
  const [file, setFile] = useState(null);
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // 라디오 버튼 변경 처리 핸들러
  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  }
  // 상태 변경 핸들러
  const handleCafeNameChange = (event) => setCafeName(event.target.value);
  const handleCafeAddressChange = (event) => setCafeAddress(event.target.value);
  const handleCafeTimeChange = (event) => setCafeTime(event.target.value);
  const handleCafePhoneChange = (event) => setCafePhone(event.target.value);
  const handleCafeIntroChange = (event) => setCafeIntro(event.target.value);
  const handleCafeDetailChange = (event) => setCafeDetail(event.target.value);

  // 파이어베이스 스토리지에 이미지 업로드 함수
  const handleCafeRegister = async () => {
    try {
      const storageRef = ref(storage, "cafeImage");
      const fileRef = ref(storageRef, file.name);
  
      await uploadBytes(fileRef, file);
      console.log('파일 업로드 성공');
      const downloadURL = await getDownloadURL(fileRef);
      console.log("저장경로 확인: " + downloadURL);
    // "&token="를 기준으로 문자열을 나누고 첫 번째 부분을 사용
    const url = downloadURL.split("&token=")[0];
    console.log("토큰 제거된 저장경로 확인: " + url);
      handleApiRequest(url);
    } catch (error) {
      console.log("이미지 업데이트 실패: ", error);
    }
  };

  // 모든 입력 필드가 비어 있지 않고, 이미지가 null이 아닌지 확인합니다.
  useEffect(() => {
    if (cafeName && cafeAddress && cafeTime && cafePhone && cafeIntro && cafeDetail && file) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [cafeName, cafeAddress, cafeTime, cafePhone, cafeIntro, cafeDetail, file]);

  // db에 카페 등록 통신
  const handleApiRequest = async (url) => {
    try {
      const rsp = await AxiosApi.cafeCreate(
        userNum,
        cafeName,
        selectedRegion,
        cafeAddress,
        cafeTime,
        cafePhone,
        cafeIntro,
        cafeDetail,
        url, // 썸네일 이미지 URL 추가
        grantType,
        accessToken
      );
  
      if (rsp.status) {
        if (rsp.data === true) {
          console.log("카페 생성 성공: ", rsp.data);
          navigate("/businesspage");
        } else {
          console.log("통신은 성공, 카페 생성 실패", rsp.data);
        }
      }
    } catch (error) {
      console.log("카페 생성 실패: ", error);
    }
  };

  // 유저의 카페 정보 가져오기
  useEffect(() => {
    const fetchMemberInfo = async () => {
      try {
        const rsp = await AxiosApi.getMemberCafeInfo(userNum, grantType, accessToken);
        if (rsp.status) {
          setMemberInfo(rsp.data);
          console.log("카페 정보 가져오기 성공: ", rsp.data)
        }
      } catch (error) {
        console.log("카페 정보 가져오기 실패: ", error);
      }
    };
    fetchMemberInfo();
  }, [userNum]);

  useEffect(() => {
    return (
      setIsSidebar("-300px")
    )
  }, []);
  
  useEffect(() => {
    return (
      setIsSidebar("-300px")
    )
  }, []);

  return(
    <OutBox>
      <Header />
      {isSidebar && <Sidebar/>}
      <Container>
        <SideMenu />
        <Detail>
          <RowBox>
            <TypeButton
              selected={selectedButton === "register"}
              onClick={() => handleTypeButtonClick("register")}
              >
              카페 등록
            </TypeButton>
            <TypeButton
              selected={selectedButton === "manage"}
              onClick={() => handleTypeButtonClick("manage")}
            >
              카페 관리
            </TypeButton>
          </RowBox>
          {selectedButton === "register" ? (
            <>
            <ContentBox>
              <RegisterBox>
                <InfoType>카페 이름</InfoType>
                <GrayInput type="text" placeholder="50자 이내" value={cafeName} onChange={handleCafeNameChange} />
              </RegisterBox>
              <RegisterBox>
                <InfoType>카페 지역</InfoType>
                <RowBox>
                <label>
                  <RadioInput 
                    type="radio"
                    value="서울특별시"
                    checked={selectedRegion === '서울특별시'}
                    onChange={handleRegionChange}
                  />
                  서울특별시
                </label>
                <label>
                  <RadioInput 
                    type="radio"
                    value="경기도"
                    checked={selectedRegion === '경기도'}
                    onChange={handleRegionChange}
                  />
                  경기도
                </label>
                <label>
                  <RadioInput 
                    type="radio"
                    value="부산광역시"
                    checked={selectedRegion === '부산광역시'}
                    onChange={handleRegionChange}
                  />
                  부산광역시
                </label>
                </RowBox>
              </RegisterBox>
              <RegisterBox>
                <InfoType>카페 주소</InfoType>
                <GrayInput type="text" placeholder="100자 이내" value={cafeAddress} onChange={handleCafeAddressChange} />
              </RegisterBox>
              <RegisterBox>
                <InfoType>카페 운영시간</InfoType>
                <GrayInput type="text" placeholder="ex) 화~일 10:00~22:00" value={cafeTime} onChange={handleCafeTimeChange} />
              </RegisterBox>
              <RegisterBox>
                <InfoType>카페 전화번호</InfoType>
                <GrayInput type="text" placeholder="ex) 010-0000-0000" value={cafePhone} onChange={handleCafePhoneChange} />
              </RegisterBox>
              <RegisterBox>
                <InfoType>카페 한 줄 소개</InfoType>
                <GrayInput type="text" placeholder="50자 이내" value={cafeIntro} onChange={handleCafeIntroChange} />
              </RegisterBox>
              <RegisterBox>
                <InfoType>카페 자세한 소개</InfoType>
                <DetailInput type="text" placeholder="1000자 이내" value={cafeDetail} onChange={handleCafeDetailChange} />
              </RegisterBox>
              <RegisterBox>
                <InfoType>카페 썸네일</InfoType>
                <input type="file" onChange={handleImageChange} />
              </RegisterBox>
              <InfoChangeButton onClick={handleCafeRegister} disabled={!isButtonActive}>등록하기</InfoChangeButton>
            </ContentBox>
            </>
          ) : (
            <>
          <SelectBox>
            <TextBox>카페 조회</TextBox>
          </SelectBox>
          <ContentBox>
            {memberInfo && memberInfo.map((cafe, index) => (
              <SpecificBox key={index}>
                <CafeImg src={cafe.thumbnail} alt="CafeImg"></CafeImg>
                <CafeRowBox>
                  <CafeName>{cafe.cafeName}</CafeName>
                  <More onClick={()=>navigate(`/cafe/detail/${cafe.id}`)}>자세히 보기</More>
                </CafeRowBox>
                <CafeRegion>지역: {cafe.region}</CafeRegion>
                <CafeIntro>소개: {cafe.intro}</CafeIntro>  
              </SpecificBox>
            ))}
          </ContentBox>
            </>
          )}
        </Detail>
      </Container>
      <Footer />
    </OutBox>
  );
};
export default BusinessCafe;