import axios from "axios";

const userProfileURL = "http://localhost:3001/api/v1/user/profile";
const token = sessionStorage.getItem("token");

export const userProfile = () => {
    return new Promise(async (resolve, reject) => {
        try {
            if(!token) {
                reject("Token not found!");
            }

            const res = await axios.post(userProfileURL, {}, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            
            resolve(res.data);
        } catch (error) {
            reject(error);
        }
    })
}