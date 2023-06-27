import axios from "axios";
const DOMAIN = "http://localhost:8111";
const DOMAIN_MYPAGE_REVIEW = "http://localhost:8111/mypage/reiew";

const AxiosApi = {

  // memberGet: async (memberNum) => {
  //   return await axios.get(DOMAIN + `/getmember?num=${memberNum}`);
  // },


  reviewGet: async (userNum) => {
    return await axios.get(`http://localhost:8111/review/getbynum?usernum=${userNum}`);
  }

};
export default AxiosApi;