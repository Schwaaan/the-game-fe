import { getToken } from "../../../utils/auth";
const axios = require('axios');


export async function createAnswer(){
    const url = `http://localhost:8060/v1/answers`;
    const token = getToken();
    const option = {
        "id_alternative" : 2,
        "id_user" : 2
    }

    let config = {
        headers: {
           Authorization: token
        }
     }

    return await axios.post(url,option, config);
}