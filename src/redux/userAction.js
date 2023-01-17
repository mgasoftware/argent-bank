import { getUserPending, getUserSuccess, getUserFail } from "./userSlice";
import { userProfile } from "../api/userProfile";

export const getUserProfile = () => async (dispatch) => {
    try {
        dispatch(getUserPending());
        const res = await userProfile();
        dispatch(getUserSuccess(res.body))
    } catch (error) {
        console.log(error);
        dispatch(getUserFail(error.message));
    }
}