import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import AxiosApi from "./Api/AxiosApi";
import user from "../taehoon/images/user.png";
import businessman from "../taehoon/images/business.png";
import ConfirmModal from "./ConfirmModal";

const UserManageBlock = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    margin-top: 20px;
    padding: 20px;

    .userManage {
        font-size: 15px;
        color : #FFCFDA;
        margin-right: 10px;
    }
    
    .logo img{
        width: 180px;
        height: 150px;
        margin-top: 10px;
        cursor: pointer;
    }

    p {
        color: #FFCFDA;
        font-weight: bolder;
    }

    .number {
      width: 80px;
      height: 30px;
    }

    .name {
      width: 120px;
      height: 30px;
    }

    .point {
      width: 200px;
      height: 30px;
    }
    
    .birth {
      width: 140px;
      height: 30px;
    }

    .gender {
      width: 80px;
      height: 30px;
    }

    .authority {
      width: 90px;
      height: 30px;
    }

    .board {
        font-family: Arial, sans-serif;
        border-collapse: collapse;
        margin-top: -5px;
        width: 45%;
        margin-left: 50px;
    }

    .board th,
    .board td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
        font-weight: bolder;
    }

    .board th {
        background-color: #f2f2f2;
        text-align: center;
    }

    

    @media (max-width: 768px) {
        .container {
            flex-direction: column;
            align-items: center;
        }

        .box {
            margin: 20px 0;
        }

        .logo img {
            margin-top: 10px;
            width: 150px;
            height: 100px;
        }
    }
`;

// 하단 페이지 숫자 표시 박스
const NumberSelectBox = styled.div`
  height: 30px;
  margin-top: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// 페이지 1개씩 좌측 이동
const LeftButton = styled.button`
  width: 30px;
  height: 30px;
  font-size: large;
  color: #7d5a5a;
  border: 0;
  background-color: #f1d1d1;
  border-radius: 50%;
  margin-right: 2%;
  cursor: pointer;
`;
// 페이지 한개씩 우측 이동
const RightButton = styled.button`
  width: 30px;
  height: 30px;
  font-size: large;
  color: #7d5a5a;
  border: 0;
  background-color: #f1d1d1;
  border-radius: 50%;
  margin-left: 2%;
  cursor: pointer;
`;
// 하단 페이지 번호
const PageNumber = styled.p`
  margin-left: 1%;
  cursor: pointer;
  color: #7D5A5A;
  ${({ active }) =>
    active &&
    `
    font-size: 20px;
    font-weight: bold;
  `}
  ${({ disabled }) =>
    disabled &&
    `
  pointer-events: none;
  color: gray;
  `}
`;

const SuperLeftButton = styled.button`
  width: 30px;
  height: 30px;
  letter-spacing: -2px;
  font-size: large;
  color: #7d5a5a;
  border: 0;
  background-color: #f1d1d1;
  border-radius: 50%;
  margin-right: 1%;
  cursor: pointer;
`;
const SuperRightButton = styled.button`
  width: 30px;
  height: 30px;
  letter-spacing: -2px;
  font-size: large;
  color: #7d5a5a;
  border: 0;
  background-color: #f1d1d1;
  border-radius: 50%;
  margin-left: 1%;
  cursor: pointer;
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CloseButtonHover = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bolder;

  &:hover, &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Image = styled.div`
  width: 200px;
  height: 180px;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

// 삭제 버튼 스타일링
const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;


const UserManage = () => {
    const navigate = useNavigate("");
    const LogoClick = () => {
        navigate('/admininfo');
    }

    const [userInfo, setUserInfo] = useState([]);
    const [pageNumber, setPageNumber] = useState("");
    const perPage = 10;

    // 첫번째 페이지
    const firstPage = pageNumber === 1;

    // 마지막 페이지
    const lastPage = Math.ceil(userInfo.length / perPage);

    // 모달 팝업을 보여주기 위한 상태
    const [showModal, setShowModal] = useState(false);

    // 삭제 확인 모달을 띄우기 위한 상태
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    // 삭제할 사용자의 정보를 저장할 상태
    const [userToDelete, setUserToDelete] = useState(null);

    // 사용자관리 클릭에 대한 상태를 저장할 state를 생성
    const [selectedUserInfo, setSelectedUserInfo] = useState(null);

    // 사용자 삭제 버튼을 클릭할 때 실행될 함수
    const handleDeleteUserClick = (memberNum) => {
      const user = getCurrentItems().find((userInfo) => userInfo.memberNum === memberNum);
      setUserToDelete(user);
      setShowConfirmModal(true);
    };

    // 삭제 확인 모달에서 '확인' 버튼을 클릭할 때 실행될 함수
    const handleConfirmDelete = () => {
      if (userToDelete) {
        // 사용자 삭제 처리
        deleteUsers(userToDelete.memberNum);

        // 모달 닫기 및 사용자 정보 초기화
        setShowConfirmModal(false);
        setUserToDelete(null);
      }
    };

        // 클릭 이벤트를 처리할 함수
        const handleRowClick = (memberNum) => {
          const selectedUserInfoData = getCurrentItems().find(userInfo => userInfo.memberNum === memberNum);
          setSelectedUserInfo(selectedUserInfoData);
          setShowModal(true); // 모달 팝업 보여주기
          navigate(`/admin/userManage?memberNum=${memberNum}`);
      };
  
      // 모달 닫기 처리
      const closeModal = () => {
          setShowModal(false);
          setSelectedUserInfo(null); // 선택한 신고내역 초기화
          navigate(`/admin/userManage`);
      };
  
      // 페이지 변경 시 아이템 표시
      const handlePageChange = (page) => {
          setPageNumber(page);
      };
  
      // 현재 페이지에 해당하는 아이템 가져오기
      const getCurrentItems = () => {
          // userNum를 기준으로 내림차순으로 userInfo를 정렬합니다.
          const sortedUserInfo = userInfo.sort(
            (a, b) => b.memberNum - a.memberNum
          );
        
          const startIndex = (pageNumber - 1) * perPage;
          const endIndex = startIndex + perPage;
        
          return sortedUserInfo.slice(startIndex, endIndex);
        };
  
    // 페이지 10개씩 나누어 표시하기
    const getPageNumbers = () => {
      const totalPageCount = Math.ceil(userInfo.length / perPage);
      const currentPage = pageNumber;
  
      const pageNumbers = [];
  
      if (currentPage <= 10) { // 현재 페이지가 10 이하인 경우
        for (let i = 1; i <= Math.min(10, totalPageCount); i++) {
          pageNumbers.push(i);
        }
        if (totalPageCount > 10) {
          pageNumbers.push("...");
          pageNumbers.push(totalPageCount);
        }
      } else { // 현재 페이지가 11 이상인 경우
        pageNumbers.push(1);
        pageNumbers.push("...");
        const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
        const endPage = Math.min(startPage + 9, totalPageCount);
        for (let i = startPage; i <= endPage; i++) {
          pageNumbers.push(i);
        }
        if (endPage < totalPageCount) {
          pageNumbers.push("...");
          pageNumbers.push(totalPageCount);
        }
      }
  
      return pageNumbers;
    };
  
  const pageNumbers = getPageNumbers();

    // 서버에서 사용자 정보를 가져오는 함수
  const getUserInfo = async () => {
    try {
      const rsp = await AxiosApi.userGetAll();
      if (rsp.status === 200) setUserInfo(rsp.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // 사용자 삭제 함수
  const deleteUsers = async (memberNum) => {
    try {
      const rsp = await AxiosApi.deleteUsers(memberNum);
      if (rsp.status === 200) {
        // 사용자가 성공적으로 삭제되었다면, 다시 사용자 정보를 가져온다.
        getUserInfo();
        setShowModal(false);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // 페이지가 처음 로딩될 때 사용자 정보를 가져오기 위해 useEffect 사용
  useEffect(() => {
    getUserInfo();
  }, []);

    

    // 모달 팝업을 보여줄 때, 조건부 렌더링을 통해 해당 모달 컨텐츠가 보여지도록 해야 합니다.
    if(showModal && selectedUserInfo) {
      return(
        <div className="modal">

          <ModalContent>
            <CloseButtonHover onClick={closeModal}>&times;</CloseButtonHover>
            <Image>
                {selectedUserInfo.authority === 'ROLE_USER' && <img src={user} alt="" className="user" width="150px" height="150px" style={{margin : "0 -20px"}}/>}
                {selectedUserInfo.authority === 'ROLE_MEMBER' && <img src={businessman} alt="" className="businessman" width="250px" height="150px" style={{margin : "0 -20px"}}/>}
            </Image>
            <DeleteButton onClick={() => handleDeleteUserClick(selectedUserInfo.memberNum)}>삭제</DeleteButton>

              {showConfirmModal && (
                  <ConfirmModal
                    message="삭제하시겠습니까?"
                    onClose={() => setShowConfirmModal(false)}
                    onConfirm={handleConfirmDelete}
                  />
                )}
                <h2>번호 : {selectedUserInfo.memberNum}</h2>
                <p>이름 : {selectedUserInfo.name}</p>
                <p>생년월일 : {selectedUserInfo.birthday}</p>
                <p>성별 : {selectedUserInfo.gender}</p>
                <p>권한 : {selectedUserInfo.authority}</p>
                <p>보유 포인트 : {selectedUserInfo.totalPoint}</p>
          </ModalContent>
        </div>
      )
    }
    
    return(
        <UserManageBlock>
            <div className="logo">
                <img src={logo} alt="logo" className="logo" onClick={LogoClick}/>
            </div>

            <div className="userManage">
                <h2>사용자 관리</h2>
            </div>

            <table className="board">
              <thead>
                  <tr>
                      <th className="number">번호</th>
                      <th className="name">이름</th>
                      <th className="birth">생년월일</th>
                      <th className="gender">성별</th>
                      <th className="authority">권한</th>
                  </tr>
              </thead>
              <tbody>
                  {getCurrentItems().map((userInfo) => (
                      <tr key={userInfo.memberNum}>
                          <td className="number" onClick={() => handleRowClick(userInfo.memberNum)} style={{ cursor: 'pointer' }}>{userInfo.memberNum}</td>
                          <td className="name">{userInfo.name}</td>
                          <td className="birthday">{userInfo.birthday}</td>
                          <td className="gender">{userInfo.gender}</td>
                          <td className="authority">{userInfo.authority}</td>
                      </tr>
                  ))}
              </tbody>
          </table>

          <NumberSelectBox>
              <SuperLeftButton
                onClick={() => setPageNumber(1)}
                disabled={firstPage}
              >
                {"<<"}
              </SuperLeftButton>
              <LeftButton
                onClick={() => handlePageChange(pageNumber - 1)}
                disabled={firstPage}
              >
                {"<"}
              </LeftButton>
              {pageNumbers.map((page, index) => (
                <PageNumber
                  key={index}
                  onClick={() => handlePageChange(page)}
                  active={pageNumber === page}
                  disabled={page === "..."}
                >
                  {page}
                </PageNumber>
              ))}
              <RightButton
                onClick={() => handlePageChange(pageNumber + 1)}
                disabled={lastPage}
              >
                {">"}
              </RightButton>
              <SuperRightButton
                onClick={() => setPageNumber(Math.ceil(userInfo.length / perPage))}
                disabled={lastPage}
              >
                {">>"}
              </SuperRightButton>
            </NumberSelectBox>


     </UserManageBlock>
    );
}

export default UserManage;