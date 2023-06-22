import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // 지역별 카페 정보 조회
  cafeInfoGet: async(category) => {
    return await axios.get(KH_DOMAIN + `/cafe?id=${category}`);
  },

};

export default AxiosApi;