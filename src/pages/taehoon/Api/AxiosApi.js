import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {
      // 회원가입 여부 
      checkId : async(userId) => {
        return await axios.get(KH_DOMAIN + `/user/check?userId=${userId}`);
      },
      
        // 회원가입
        userReg : async(userId, password, name, phone, email, birthday, gender, authority) => {
            const member ={
                userId : userId,
                password: password,
                name : name,
                phone : phone,
                email : email,
                birthday : birthday,
                gender : gender,
                authority : authority
        };
            return await axios.post(KH_DOMAIN + "/user/new", member);
        },

        // 로그인
        userLogin: async (userId, password, grantType, accessToken) => {
          const loginData = {
            userId: userId,
            password: password
          };

        return await axios.post(KH_DOMAIN + "/user/login", loginData)
      },

      // 비밀번호 찾기
      findPw: async(email) => {
        const data = {
            email: email
        };
        return await axios.post(KH_DOMAIN + "/findpw", data);
    },

    // 아이디 찾기
    findId : async(email) => {
      const data = {
        email : email
      };
      return await axios.post(KH_DOMAIN + "/findId", data);
    },
         
        
        // 신고 번호로 조회
        // reportGet : async(reportNum) => {
        //   return await axios.get(KH_DOMAIN + `/admin/report/getbynum?reportNum=${reportNum}`);
        // },
        
        // 신고 전체 조회
        reportGetAll: async () => {
          return await axios.get(KH_DOMAIN + '/admin/report/all');
        }

    };

export default AxiosApi;