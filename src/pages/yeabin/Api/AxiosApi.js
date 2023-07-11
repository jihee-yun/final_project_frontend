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

  // 룰렛 포인트 적립
  pointGet: async(winning) => {
    const points = {
      totalPoint: winning
    };
    return await axios.post(KH_DOMAIN + "/roulette/pointadd", points);
  },
  
  // 퀴즈 포인트 적립
  quizPoint: async(amount) => {
    const points = {
      totalPoint: amount
    };
    return await axios.post(KH_DOMAIN + "/quizmain/quizpoint", points);
  },

  // 내 포인트 조회
  myPointGet: async(mypoint) => {
    return await axios.get(KH_DOMAIN + `/point/mypoint?mypoint=${mypoint}`);
  },

  // 내 정보 조회
  myInfoGet: async(myinfo) => {
    return await axios.get(KH_DOMAIN + `/couponstore/myinfo?myinfo=${myinfo}`);
  },
};
export default AxiosApi;
