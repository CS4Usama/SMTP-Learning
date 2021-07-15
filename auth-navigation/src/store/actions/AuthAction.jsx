import {auth} from '../../config/Firebase';

export const LOGIN = 'Login';
export const LOGOUT = 'Logout';

export const doLogin = (email, password) => async(dispatch) => {
    try {
        // Firebase Login Code
        const userCredential = await auth.signInWithEmailAndPassword(email, password)
        var user = userCredential.user;

        console.log("User ID:", user.uid);

        dispatch({
            type: LOGIN,
            payload: user
        });
    } catch(err) {
        console.log("Exception is: ", err);
        // alert(err);
        alert(JSON.stringify(err));
    }
}


export const doLogout = () => async(dispatch) => {
    try {
        // Firebase Login Code
        const res = await auth.signOut()

        console.log("Logout Response:", res);

        dispatch({
            type: LOGOUT,
        });
    } catch(err) {
        console.log("Exception is: ", err);
        // alert(err);
        alert(JSON.stringify(err));
    }
}