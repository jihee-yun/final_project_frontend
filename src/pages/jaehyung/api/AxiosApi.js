import axios from "axios";
const DOMAIN = "http://localhost:8111";

const AxiosApi = {

  // memberGet: async (memberNum) => {
  //   return await axios.get(DOMAIN + `/getmember?num=${memberNum}`);
  // },


  reviewGet: async (userNum) => {
    return await axios.get(`http://localhost:8111/review/getbynum?usernum=${userNum}`);
  },

  reviewGetByDate : async (userNum, startDate, endDate) => {
    const checkData = {
      userNum : userNum,
      startDate : startDate,
      endDate : endDate
    }
    return await axios.post(`${DOMAIN}/review/getbynum&date`, checkData);
  }
};
export default AxiosApi;