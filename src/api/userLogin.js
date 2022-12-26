import axios from "axios"

export const userLogin = (userInfo, rememberME) => {
    const loginURL = "http://localhost:3001/api/v1/user/login";

    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.post(loginURL, userInfo);
            resolve(res.data);

            if (res.data.status === 200) {
                rememberME === false ? sessionStorage.setItem("token", res.data.body.token) : localStorage.setItem("token", res.data.body.token);
            }
        } catch (error) {
            reject(error);
        }
    })
}