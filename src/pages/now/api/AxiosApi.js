import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const MainAxiosApi = {
    MainInfoGet: async(rankingcard) => {
        return await axios.get(KH_DOMAIN + `/auth/main`)
    }
}
export default MainAxiosApi;