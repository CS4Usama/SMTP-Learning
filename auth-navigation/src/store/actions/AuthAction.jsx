import {auth} from '../../config/Firebase';

export const LOGIN = 'Login';

export const doLogin = (email, password) => async(dispatch) => {
    try {
        // Firebase Login Code
        const userCredential = auth.signInWithEmailAndPassword(email, password)
        var user = userCredential.user;
        
        console.log("user", user);

        dispatch({
            type: LOGIN,
            payload: user
        });
    } catch(err) {
        console.log("Exception is: ", err);
        alert(err);
    }
}