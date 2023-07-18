import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // 챌린지 조회
  challengeGet: async(chList) => {
    return await axios.get(KH_DOMAIN + `/event/chList?chList=${chList}`);
  },

  // 쿠폰 조회
  getCoupon: async(couponget) => {
    return await axios.get(KH_DOMAIN + `/couponstore/couponget?couponget=${couponget}`);
  },

  // 이벤트 포인트 적립
  pointGet: async(winning) => {
    const points = {
      totalPoint: winning
    };
    return await axios.post(KH_DOMAIN + "/roulette/pointadd", points);
  },
  
  // 내 포인트 조회
  myPointGet: async(mypoint) => {
    return await axios.get(KH_DOMAIN + `/point/mypoint?mypoint=${mypoint}`);
  },

  // 내 정보 조회
  myInfoGet: async(myinfo) => {
    return await axios.get(KH_DOMAIN + `/couponstore/myinfo?myinfo=${myinfo}`);
  },

  // 챌린지 신청
  challengeApply: async(challengeId, userId) => {
    const data = {
      challengeId: challengeId,
      userId: userId
    };
    return await axios.post(KH_DOMAIN + "/mychallenge/apply", data)
  },

  // 마이챌린지 조회
  mychallengeGet: async(userNum, challengeId) => {
    return await axios.get(KH_DOMAIN + `/mychallenge/get?userNum=${userNum}&challengeId=${challengeId}`);
  },
};
export default AxiosApi;
