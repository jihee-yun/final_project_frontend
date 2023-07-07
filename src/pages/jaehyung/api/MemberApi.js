import axios from "axios";
const DOMAIN = "http://localhost:8111";

const MemberApi = {
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

  memberLogin : async (memberId, password) => {
    const loginData = {
      memberId : memberId,
      password : password
    }
    return await axios.post(`${DOMAIN}/member/login`, loginData);
  }



};
export default MemberApi;