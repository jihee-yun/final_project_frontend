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
};
export default AxiosApi;
