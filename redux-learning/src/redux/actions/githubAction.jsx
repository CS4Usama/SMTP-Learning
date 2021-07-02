import { endpoint, ERROR_GITHUB_FOLLOWER_API, GITHUB_FOLLOWER_API } from "../constants/type";

export const fetchFollowers = (data) => async(dispatch, previousState) => {
    try {
        let res = await fetch(`${endpoint}/users/${data}/followers`);
        const followers = await res.json();
        dispatch({
            type: GITHUB_FOLLOWER_API,
            payload: followers
        });
    }
    catch(err) {
        console.log("Exception is: ", err);
        dispatch({
            type: ERROR_GITHUB_FOLLOWER_API,
            payload: err
        });
    }
}