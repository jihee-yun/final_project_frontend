import axios from "axios";
const DOMAIN = "http://localhost:8111";

const MemberApi = {
  // 일반 회원 로그인
  userSignup : async (userId, password, name, phone, email, birthday, gender, authority) => {
    const signupData = {
      userId : userId,
      password : password,
      name : name,
      phone : phone,
      email : email,
      birthday : birthday,
      gender : gender,
      authority : authority
    }
    return await axios.post(`${DOMAIN}/user/signup`, signupData);
  },

  // 사업자 회원 로그인
  memberSignup : async (memberId, password, name, phone, email, birthday, gender, authority) => {
    const signupData = {
      memberId : memberId,
      password : password,
      name : name,
      phone : phone,
      email : email,
      birthday : birthday,
      gender : gender,
      authority : authority
    }
    return await axios.post(`${DOMAIN}/member/signup`, signupData);
  },

  // 일반 회원 로그인
  userLogin : async (userId, password) => {
    const loginData = {
      userId : userId,
      password : password
    }
    return await axios.post(`${DOMAIN}/user/login`, loginData);
  },
  // 사업자 회원 로그인
  memberLogin : async (memberId, password) => {
    const loginData = {
      memberId : memberId,
      password : password
    }
    return await axios.post(`${DOMAIN}/member/login`, loginData);
  },

  // 조회에 사용될 일반 회원 번호 조회
//  userNumGet : async (userId) => {
//    const userIdData = {
//      userId : userId
//    }
//    return await axios.post(`${DOMAIN}/user/numget`, userIdData);
//  },

  // 조회에 사용될 사업자 회원 번호 조회
//  memberNumGet : async (memberId) => {
//    const memberIdData = {
//      memberId : memberId
//    }
//    return await axios.post(`${DOMAIN}/member/numget`, memberIdData);
//  },




  // 한줄소개 업데이트 테스트
  introUpdate: async (intro) => {
    const introData = {
      intro : intro
    }
    return await axios.post(`${DOMAIN}/info/intro`, introData);
  }

};
export default MemberApi;