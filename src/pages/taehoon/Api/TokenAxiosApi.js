import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const TokenAxiosApi = {
    getToken : async(email, pw) => {
        const token = {
            email : email,
            pw: pw
        };
        return await axios.post(KH_DOMAIN + "/auth", token, {
            headers : {
                'Content-Type' : 'application/json' 
            }
        });
    },

    userInfo : async(token) => {
        return await axios.get(KH_DOMAIN + "/user", {
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + token
            }
        });
    },

    editInfo : async(data) => {
        const updateData = {
            id : data.id,
            pw : data.pw,
            token : data.token
        };
        console.log(data.token);
        return await axios.get(KH_DOMAIN + "/editInfo", updateData, {
            headrs : {
                'Content-Type' : 'appllication/json',
                'Authorization' : 'Bearer ' + data.token
            }
        });
    },
};

export default TokenAxiosApi;