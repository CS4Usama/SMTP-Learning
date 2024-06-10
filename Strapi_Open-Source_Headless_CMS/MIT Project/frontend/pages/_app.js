import '../styles/globals.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

import { AuthProvider } from '../context/AuthContext';


function MyApp({ Component, pageProps }) {
    <Head>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
    </Head>

    useEffect(() => {
        console.log("I am useEffect from app.js");
    }, []);

    const [cart, setCart] = useState([]);
    const [reloadKey, setReloadKey] = useState(1);

    const addToCart = (item, qty, price) => {
        console.log("Add to Cart");
        let newCart = cart;
        for(let index = 0; index < qty; index++) {
            newCart.push([item, price]);
        }
        console.log("Add to Cart", newCart);
        setCart(newCart);
        setReloadKey(Math.random());
    }

    const removeFromCart = (item, qty) => {
        let newCart = cart;
        let index = newCart.indexOf(item);
        newCart.splice(index);
        setCart(newCart);
    }

    const clearCart = (item) => {
        setCart([]);
    }

    // ----

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


    // ---

    return (
        <>
            <AuthProvider>
                <ToastContainer />
                {
                    // user.value && <button className='logout_button' onClick={logoutHandler}>Logout Your Account</button>
                }
                <NavBar key={reloadKey} cart={cart} />
                <Component cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} clearCart={clearCart} {...pageProps} />
                <Footer />
            </AuthProvider>
        </>
    );
}

export default MyApp;
