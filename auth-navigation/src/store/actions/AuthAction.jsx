export const LOGIN = 'Login';

export const doLogin = (userName) => async(dispatch) => {
    try {
        // Firebase Login Code
        
        dispatch({
            type: LOGIN,
            payload: ''
        });
    } catch(err) {
        console.log("Exception is: ", err);
        alert(err);
    }
}