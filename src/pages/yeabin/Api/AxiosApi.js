import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // 챌린지 조회
  chellengeGet: async(chName) => {
    return await axios.get(KH_DOMAIN + `/event/chName?chName=${chName}`);
  },
};

export default AxiosApi;