import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {
      // 회원가입 여부 
      checkId : async(userId) => {
        return await axios.get(KH_DOMAIN + `/user/check?userId=${userId}`);
      },
      
        // 회원가입
        userReg : async(userId, password, name, phone, email, birthday, signUpTime, gender, authority) => {
            const member ={
                userId : userId,
                password: password,
                name : name,
                phone : phone,
                email : email,
                birthday : birthday,
                signUpTime : signUpTime,
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

    // 사용자 삭제
    deleteUsers : async(memberNum) => {
        return await axios.delete(KH_DOMAIN + `/admin/usermanage/delete/${memberNum}`);
    },

    // 리뷰 삭제
    deleteReviews : async(reviewNum) => {
        return await axios.delete(KH_DOMAIN + `/admin/review/delete/${reviewNum}`);
    },

    // 신고 삭제
    deleteReports : async(reportNum) => {
      return await axios.delete(KH_DOMAIN + `/admin/report/delete/${reportNum}`);
    },
         
        
        // 신고 전체 조회
        reportGetAll: async () => {
          return await axios.get(KH_DOMAIN + '/admin/report/all');
        },

        // 신고 내용 조회
        reportGetContents : async(reportNum) => {
          return await axios.get(KH_DOMAIN + `/admin/report/getContents?reportNum=${reportNum}`)
        },

        // 리뷰 전체 조회
        reviewGetAll : async() => {
          return await axios.get(KH_DOMAIN + `/admin/review/all`);
        },

        // 사용자 조회
        userGetAll : async() => {
          return await axios.get(KH_DOMAIN + `/admin/usermanage`);
        },

        // 관리자 로그인
        adminLogin : async(adminId, password) => {
          const adminData = {
            adminId : adminId,
            password : password
          }
          return await axios.post(KH_DOMAIN + `/admin/login`, adminData);
        },

        // 관리자 등록
        adminReg : async(adminId, password, name, birthday, phone, gender) => {
          const admin = {
              adminId : adminId,
              password : password,
              name : name,
              birthday : birthday,
              phone : phone,
              gender : gender
          };

          return await axios.post(KH_DOMAIN + `/admin/register`, admin);
        }


    };

export default AxiosApi;