import axios from "axios";
const DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // 리뷰 전체 다 불러오기(테스트용)
  reviewGet: async (userNum, grantType, accessToken) => {
    return await axios.get(`http://localhost:8111/review/getbynum?usernum=${userNum}`, {
      headers: {
        Authorization: `${grantType} ${accessToken}`
      }
    });
  },

  // 회원 번호로 날짜 내의 리뷰 조회
  reviewGetByDate : async (userNum, startDate, endDate, grantType, accessToken) => {
    const checkData = {
      userNum : userNum,
      startDate : startDate,
      endDate : endDate
    }
    return await axios.post(`${DOMAIN}/review/getbynumdate`, checkData, {
      headers: {
        Authorization: `${grantType} ${accessToken}`
      }
    });
  },

  // 유저 번호로 챌린지 관련 정보 전체 조회
  getMemberChallengeInfo: async (userNum, grantType, accessToken) => {
    return await axios.get(`${DOMAIN}/event/getbynum?usernum=${userNum}`, {
      headers: {
        Authorization: `${grantType} ${accessToken}`
      }
    });
  },









  // 포인트 충전
  chargePoint: async (membernum, point, grantType, accessToken) => {
    const pointData = {
      membernum : membernum,
      point : point
    }
    return await axios.post(`${DOMAIN}/point/chargepoint`, pointData, {
      headers: {
        Authorization: `${grantType} ${accessToken}`
      }
    });

  }
};
export default AxiosApi;