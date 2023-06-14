import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {

  membeGert: async (memberNum) => {
    return await axios.get(KH_DOMAIN + `/getmember?num=${mem}`)
  }




};
export default AxiosApi;