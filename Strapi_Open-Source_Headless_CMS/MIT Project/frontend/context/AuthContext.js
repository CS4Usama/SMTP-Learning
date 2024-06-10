import { createContext, useState, useEffect } from "react";
import { Magic } from "magic-sdk";
// import { MAGIC_PUBLIC_KEY } from "../utils/urls";
import { useRouter } from "next/router";

const AuthContext = createContext();

let magic;

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    /**
     * Log the user in
     * @param {string} email 
     */
    const loginUser = async (email) => {
        // setLoading(false);
        console.log('email', email);
        try {
            await magic.auth.loginWithMagicLink({ email });
            setUser({ email });
            router.push("/");
            checkUserLoggedIn()
        } catch (err) {
            console.log('Login Error: ', err);
        }
    };

    /**
     * Log the user out
     */
    const logoutUser = async () => {
        // setLoading(true);
        try {
            await magic.user.logout();
            setUser(null);
            router.push("/");
        } catch (err) {
            console.log('Logout Error: ', err);
        }
    };

    /**
     * If user is logged in, get data and display it
     */
    const checkUserLoggedIn = async () => {
        try {
            setLoading(true)
            const isLoggedIn = await magic.user.isLoggedIn();
            console.log('isLoggedIn', isLoggedIn);

            if (isLoggedIn) {
                setLoading(false);
                const { email } = await magic.user.getMetadata();
                setUser({ email });
                //Add this just for test
                const token = await getToken()
                console.log("checkUserLoggedIn token", token)
            } else {
                setLoading(false);
            }
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    /**
     * Retrieve Magic Issued Bearer Token
     * This allows User to make authenticated requests
     */
    const getToken = async () => {
        try {
            const token = await magic.user.getIdToken()
            console.log('token', token);
            localStorage.setItem('token', token);
            sessionStorage.setItem('token', token);
            return token
        } catch (err) {
            console.log(err)
        }
    }

    /**
     * Reload user login on app refresh
     */
    useEffect(() => {
        magic = new Magic("pk_live_D9EBA5F4ECF2F8FD");
        // setLoading(true);
        checkUserLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, logoutUser, loginUser, getToken }}>
            {props.children}
        </AuthContext.Provider>
    );
};


export default AuthContext;