import axios from "axios"

const loginURL = "http://localhost:3001/api/v1/user/login";

export const userLogin = userInfo => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.post(loginURL, userInfo);
            resolve(res.data);

            if(res.data.status === 200) {
                sessionStorage.setItem("token", res.data.body.token)
            }
        } catch (error) {
            console.log(error.message);
            reject(error);
        }
    })
}