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

  // 포인트 추가
  pointGet: async(winning) => {
    const points = {
      totalPoint: winning
    };
    return await axios.post(KH_DOMAIN + "/pointadd", points);
  },

  // 내 포인트 조회
};
export default AxiosApi;
