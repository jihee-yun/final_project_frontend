import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";
const KH_DOMAIN_MYPAGE_REVIEW = "http://localhost:8111/mypage/reiew";

const AxiosApi = {

  membeGet: async (memberNum) => {
    return await axios.get(KH_DOMAIN + `/getmember?num=${memberNum}`);
  },


  reviewGet: async (userNum) => {
    return await axios.get(KH_DOMAIN_MYPAGE_REVIEW + `getbyid?usernum=${userNum}`);
  }

};
export default AxiosApi;