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
  pointGet: async(memberNum, winning, pointType) => {
    const points = {
      memberNum: memberNum,
      point: winning,
      pointType: pointType
    };
    return await axios.post(KH_DOMAIN + "/point/pointadd", points);
  },

  // 내 정보 조회
  myInfoGet: async(memberNum) => {
    return await axios.get(KH_DOMAIN + `/member/myinfo?memberNum=${memberNum}`);
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
