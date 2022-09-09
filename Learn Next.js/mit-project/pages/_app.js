import '../styles/globals.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {
    const [user, setUser] = useState({value: null});
    const [key, setKey] = useState(0);
    const router = useRouter();

    const logoutHandler = () => {
        localStorage.removeItem('token');
        setUser({value: null});
        setKey(Math.random());
        toast.success('Your Account is Successfully Logged Out!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        router.push('/');
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            setUser({value: token});
            setKey(Math.random());
        }
    }, [router.query]);

    return (
        <>
            <ToastContainer />
            {
                user.value && <button className='logout_button' onClick={logoutHandler}>Logout Your Account</button>
            }
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
