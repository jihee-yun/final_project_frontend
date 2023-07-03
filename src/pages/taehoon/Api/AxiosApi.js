import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // 회원가입 여부 
  checkId : async(userId) => {
    return await axios.get(KH_DOMAIN + `/check?userId=${userId}`);
  },
  
    // 회원가입
    userReg : async(user_id, password, name) => {
        const member ={
            user_id : user_id,
            password: password,
            name : name
    };
        return await axios.post(KH_DOMAIN + "/new", member);
    },

    // 로그인
    userLogin: async(user_id, password) => {
        const loginData = {
            user_id: user_id,
            password: password,
          };
        
          try {
            const response = await axios.post(KH_DOMAIN +'/login', loginData);
            const { authToken } = response.data; // 서버에서 발급한 토큰 받아오기
        
            // 토큰 저장 (로컬 스토리지 등에 저장)
            localStorage.setItem('authToken', authToken);
        
            // 이후에 API 요청 시 헤더에 토큰 포함하여 보내기
            // axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
        
            return response.data; // 로그인 성공 시 추가 작업을 위해 필요한 데이터 반환
          } catch (error) {
            // 로그인 실패 처리
            throw new Error('로그인에 실패했습니다.');
          }
        },    

        // 관리자 등록
        adminReg : async(name, gender, age, adminId, adminPw) => {
          const admin = {
            name : name,
            gender : gender,
            age : age,
            adminId : adminId,
            adminPw : adminPw
          };
          return await axios.post(KH_DOMAIN + "/admin", admin);
        } 
    };

export default AxiosApi;