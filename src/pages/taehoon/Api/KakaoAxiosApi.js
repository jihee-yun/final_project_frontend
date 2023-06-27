import axios from "axios"
const KH_DOMAIN = `${process.env.REACT_APP_API_DOMAIN}`;

const KakaoAxiosApi =  {
    kakaoAuthCode : async(authorizationCode) => {
        try {
          const kakaoLogin = {
          authorizationCode : authorizationCode
        };
        return await axios.post(KH_DOMAIN + "/kakao", kakaoLogin);
        } catch (error) {
          throw error;
        }
      }
};


export default KakaoAxiosApi;