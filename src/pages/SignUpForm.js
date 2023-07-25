import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AxiosApi from "../api/AxiosApi";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Policy from "../component/Policy";
import view from "../images/view.png";


const Container = styled.div`
  width: 100%;
  margin-top: 100px;

  .message.success {
    color: green;
  }

  .message.error {
    color: red;
  }
`;

const Box = styled.div`
  @media (max-width: 768px) {
    width: 80%;
  }
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignupBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const PolicyCheck = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const GroupBox = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
  width: 100px;
  height: 10px;
  font-weight: bold;
  font-size: .9rem;
  background-color: #FFCFDA;
  border-radius: 70%;
`;

const Input = styled.input`
  outline: none;
  margin-left: 10px;
  margin-bottom: 10px;
  width: 300px;
  height: 30px;
  border: none;
  border-bottom: 1.5px solid darkgray;
`;

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const RadioSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  span {
    margin-right: 100px;
    font-weight: bold;
    font-size: .9rem;
  }
`;

const IdCheck = styled.button`
  @media (max-width: 768px) {
    right: 0;
  }
  position: absolute;
  right: 75px;
  background-color: #FFCFDA;
  color: #585858;
  border: none;
  border-radius: 10px;
  height: 25px;
  font-size: .8rem;
  cursor: pointer;

  &:hover{
    color: white;
  }
`;

const RadioLabel = styled.label`
  margin-right: 20px;
  width: 120px;
`;

const RadioButton = styled.input`
  margin-left: 45px;
`;

const SignupButton = styled.button`
  border: none;
  width: 300px;
  height: 30px;
  border-radius: 20px;
  background-color: transparent;
  margin-top: 50px;
  margin-bottom: 10px;
  color: #585858;
  font-weight: bold;
  cursor: pointer;

  &.active {
    background-color: #FFCFDA;
  }

  &.inactive {
    background-color: lightgray;
    cursor: not-allowed;
  }
`;

const TextBox = styled.p`
  font-size: 1rem;
  margin: 0;
  h5{
    color: darkgray;
  }
`;

const Hint = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 180px;
  }
  font-size: .6rem;
  width: 40%;
  padding-left: 90px;
`;

const FormBox = styled.div`
  margin-top: 40px;
`;

const SignUpForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const authorityGet = location.state.authority;

  // 아이디, 비밀번호, 전화번호, 이메일, 생일, 성별, 사업자+회원
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [conPw, setConPw] = useState("");
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthDay] = useState("");
  const [gender, setGender] = useState("MALE");

  // 오류 메세지
  const [idMsg, setIdMsg] = useState("");
  const [pwMsg, setPwMsg] = useState("");
  const [conPwMsg, setConPwMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [birthMsg, setBirthMsg] = useState("");
  const [phoneMsg, setPhoneMsg] = useState("");

  // 유효성 검사
  const [isID, setIsID] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isConPw, setIsConPw] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isBirth, setIsBirth] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  // 약관 동의
  const [isChecked, setIsChecked] = useState(false);

  // 가입 약관
  const [allCheck, setAllCheck] = useState(false);
  const [checkA, setCheckA] = useState(false);
  const [checkB, setCheckB] = useState(false);
  const [checkC, setCheckC] = useState(false);
  const [checkD, setCheckD] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  const allBtn = () => {
    if(allCheck === false) {
      setCheckA(true)
      setCheckB(true)
      setCheckC(true)
      setCheckD(true)
    } else {
      setCheckA(false)
      setCheckB(false)
      setCheckC(false)
      setCheckD(false)
    }
  };

  useEffect(() => {
    if(checkA === true && checkB === true && checkC === true && checkD === true) {
      setAllCheck(true)
    } else {
      setAllCheck(false)
    }
  }, [checkA, checkB, checkC, checkD]);

  const BtnA = () => {
    if(checkA === false) {
      setCheckA(true) 
    } else {
      setCheckA(false)
    }
  };

  const BtnB = () => {
    if(checkB === false) {
      setCheckB(true) 
    } else {
      setCheckB(false)
    }
  };

  const BtnC = () => {
    if(checkC === false) {
      setCheckC(true) 
    } else {
      setCheckC(false)
    }
  };

  const BtnD = () => {
    if(checkD === false) {
      setCheckD(true) 
    } else {
      setCheckD(false)
    }
  };

  const handleImageClick = () => {
    setShowPolicy((prevShowPolicy) => !prevShowPolicy);
  };

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  // 성별 라디오 버튼
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

   // 이름
   const onChangeName = (e) => {
    setName(e.target.value);
  }

  // 아이디 정규식
  const onChangeId = (e) => {
    setUserID(e.target.value)
    if (e.target.value.length < 5 || e.target.value.length > 12) {
        setIdMsg("5자리 이상 12자리 미만으로 입력해 주세요.");
        setIsID(false);    
    } else {
        setIdMsg("올바른 형식 입니다.");
        setIsID(true);
    }
  }

  // 아이디 중복확인
  const onClickIdCheck = async() => {
    console.log(userID);
    const mailCheck = await AxiosApi.checkId(userID);
    console.log(mailCheck.data);
    if(mailCheck.data === true) {
        setIdMsg("이미 사용중인 아이디입니다.");
        setIsID(false);
    }else{
        setIdMsg("사용 가능한 아이디입니다.");
        setIsID(true);
    }
  }

  // 비밀번호 정규식 확인
  const onChangePw = (e) => {
    const passwordRex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,15}$/;
    const currentPw = e.target.value;
    setPassword(currentPw);
    if (!passwordRex.test(currentPw)) {
      setPwMsg("숫자+영문자+특수문자 조합으로 7자리 이상 입력해주세요.");
      setIsPw(false);
    } else {
      setPwMsg("안전한 비밀번호에요!");
      setIsPw(true);
    }
  };

  // 비밀번호 확인 일치 여부
  const onChangeConPw = (e) => {
    const passwordCurrent = e.target.value;
    setConPw(passwordCurrent);
    if (passwordCurrent !== password) {
      setConPwMsg("비밀번호가 일치하지 않습니다.");
      setIsConPw(false);
    } else {
      setConPwMsg("비밀번호가 일치 합니다.");
      setIsConPw(true);
    }
  };

  // 이메일 정규식
  const onChangeEmail = (e) => {
    const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailMsg("이메일 형식으로 입력해주세요");
      setIsEmail(false);
    } else {
      setEmailMsg("올바른 형식입니다.");
      setIsEmail(true);
    }
  }

  // 생일 정규식
  const onChangeBirth = (e) => {
    const validBirthDay = (birthday) => {
      const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/;
      return birthdateRegex.test(birthday);
    };
    setBirthDay(e.target.value);
    if(!validBirthDay(e.target.value)) {
      setBirthMsg("올바른 형식의 생년월일을 입력하세요 (yyyy-mm-dd).");
      setIsBirth(false);
    }else{
      setBirthMsg("유효한 생년월일입니다.");
      setIsBirth(true);
    }
  }

  // 전화번호 정규식
  const onChnagePhoneNum = (e) => {
    const validPhoneNum = (phoneNum) => {
      const phoneRegex = /^\d{2,3}-\d{3,4}-\d{4}$/;
      return phoneRegex.test(phoneNum);
    };
    setPhoneNum(e.target.value);
    if(!validPhoneNum(e.target.value)) {
      setPhoneMsg("올바른 형식의 전화번호를 입력하세요.");
      setIsPhone(false);
    }else{
      setPhoneMsg("유효한 전화번호입니다.");
      setIsPhone(true);
    }
  }


  const handleSignup = async() => {
    // const memberId = document.getElementById("memberId").value;
    // const password = document.getElementById("password").value;
    // const name = document.getElementById("name").value;
    // const phone = document.getElementById("phone").value;
    // const email = document.getElementById("email").value;
    // const birth = document.getElementById("birth").value;
  
    try {
      let rsp;
      if (authorityGet === "ROLE_USER") {
        rsp = await AxiosApi.memberSignup(userID, password, name, phoneNum, email, birthday, gender, authorityGet);
      } else if (authorityGet === "ROLE_MEMBER") {
        rsp = await AxiosApi.memberSignup(userID, password, name, phoneNum, email, birthday, gender, authorityGet);
      }
      if(rsp.status){
        //const { memberId } = rsp.data;
        console.log("회원가입 성공:", rsp.data);
        navigate("/memberlogin");
      }
    } catch (error) {
      console.error("회원가입 실패:", error);
    }
  }
  
  return(
    <>
    <Header />
    <Container>
    <Box>
    <TextBox><h2>회원가입</h2></TextBox>
    <Policy />
    <PolicyCheck>
    <label for="myCheckbox">Sweet Kingdom 회원 약관에 동의합니다</label>
    <input type="checkbox" id="myCheckbox" checked={isChecked} onChange={handleCheckBox}/>
    </PolicyCheck>
    <SignupBox>
        <GroupBox>
        <InputGroup>
          <InputLabel htmlFor="memberId">아이디</InputLabel>
          <Input id="memberId" type="text" value={userID} onChange={onChangeId} />
        </InputGroup>
        <Hint>{userID.length > 0 && (<span className={`message ${isID ? 'success' : 'error'}`}>{idMsg}</span>)}</Hint>
        <IdCheck onClick={onClickIdCheck}>중복확인</IdCheck>
        </GroupBox>
        <GroupBox>
        <InputGroup>
          <InputLabel htmlFor="password">비밀번호</InputLabel>
          <Input id="password" type="password" value={password} onChange={onChangePw}/>
        </InputGroup>
        <Hint>{password.length > 0 && (<span className={`message ${isPw ? 'success' : 'error'}`}>{pwMsg}</span>)}</Hint>
        </GroupBox>
        <GroupBox>
        <InputGroup>
          <InputLabel htmlFor="password">비밀번호 확인</InputLabel>
          <Input id="passwordCon" type="password" value ={conPw} onChange={onChangeConPw}/>
        </InputGroup>
        <Hint>{password.length > 0 && (<span className={`message ${isConPw ? 'success' : 'error'}`}>{conPwMsg}</span>)}</Hint>
        </GroupBox>
        <GroupBox>
        <InputGroup>
          <InputLabel htmlFor="name">이름</InputLabel>
          <Input id="name" type="text" value={name} onChange={onChangeName}/>
        </InputGroup>
        </GroupBox>
        <GroupBox>
        <InputGroup>
          <InputLabel htmlFor="phone">핸드폰</InputLabel>
          <Input id="phone" type="text" value={phoneNum}  onChange={onChnagePhoneNum}/>
        </InputGroup>
        <Hint>{phoneNum.length > 0 && (<span className={`message ${isPhone ? 'success' : 'error'}`}>{phoneMsg}</span>)}</Hint>
        </GroupBox>
        <GroupBox>
        <InputGroup>
          <InputLabel htmlFor="email">이메일</InputLabel>
          <Input id="email" type="text" value={email} onChange={onChangeEmail}/>
        </InputGroup>
        <Hint>{email.length > 0 && (<span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMsg}</span>)}</Hint>
        </GroupBox>
        <GroupBox>
        <InputGroup>
          <InputLabel htmlFor="birth">생년월일</InputLabel>
          <Input id="birth" type="text" value={birthday} onChange={onChangeBirth}/>
        </InputGroup>
        <Hint>{birthday.length > 0 && (<span className={`message ${isBirth ? 'success' : 'error'}`}>{birthMsg}</span>)}</Hint>
        </GroupBox>
        <RadioSelect>
          {/* <span>성별</span>  */}
          <RadioLabel>
            <RadioButton
              type="radio"
              id="gender"
              value="MALE"
              checked={gender === "MALE"}
              onChange={handleGenderChange}
            />
            남성
          </RadioLabel>
          <RadioLabel>
            <RadioButton
              type="radio"
              id="gender"
              value="FEMALE"
              checked={gender === "FEMALE"}
              onChange={handleGenderChange}
            />
            여성
          </RadioLabel>
          </RadioSelect>
          <FormBox>
          <form action="" method="post" className="terms">
            <div className="termsBox">
              <h4>약관 동의</h4>
              <div className="termItem">
                <input type="checkbox" id="allCheck" checked={allCheck} onChange={allBtn}/>
                <label for="allCheck"><b className="allBtn">전체 동의</b></label>
              </div> 
              <hr />
              <div className="termItem">
                <input type="checkbox" id="checkA" checked={checkA} onChange={BtnA}/>
                <label for="checkA">(필수) 서비스 이용약관 동의</label>
                <img src={view} alt="약관설명" style={{width: "14px", height: "14px"} } onClick={handleImageClick}/>
                {showPolicy && <Policy />}
              </div>
              <div className="termItem">
                <input type="checkbox" id="checkB" checked={checkB} onChange={BtnB}/>
                <label for="checkB">(필수) 개인정보 수집 및 이용에 대한 동의</label>
                {/* <img src={view} alt="약관설명" style={{width: "14px", height: "14px"}}/> */}
              </div>
              <div className="termItem">
                <input type="checkbox" id="checkC" checked={checkC} onChange={BtnC}/>
                <label for="checkC">(필수) 만 14세 이상입니다.</label>
              </div>
              <div className="termItem">
                <input type="checkbox" id="checkD" checked={checkD} onChange={BtnD}/>
                <label for="checkD">(선택) 마케팅 수신에 동의합니다.</label>
              </div>
            </div>
            </form>
          </FormBox>
        {(checkA && checkB && checkC && isChecked && isID && isPw && isConPw && isEmail && isBirth && isPhone && name && gender) ? 
        (<SignupButton className="active" onClick={handleSignup}>회원가입</SignupButton>):
        (<SignupButton className="inactive">회원가입</SignupButton>)}
        </SignupBox>
        </Box>
        </Container>
        <Footer />
    </>
  );
};

export default SignUpForm;

