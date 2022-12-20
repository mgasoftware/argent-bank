import { getUserPending, getUserSuccess, getUserFail } from "./userSlice";
import { userProfile } from "../api/userProfile";

export const getUserProfile = () => async (dispatch) => {
    try {
        dispatch(getUserPending());
        const user = await userProfile();
        console.log(user)
    } catch (error) {
        // dispatch(getUserFail(error));
    }
}