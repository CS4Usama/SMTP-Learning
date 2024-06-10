import styles from '../styles/Login.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faChevronRight, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const LoginUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const router = useRouter();

    const passwordToogleIcon = (
        <FontAwesomeIcon
            icon={passwordVisibility ? faEyeSlash : faEye}
            onClick={(e) => setPasswordVisibility(passwordVisibility => !passwordVisibility)}
        />
    );
    const passwordInputType = passwordVisibility ? "text" : "password";

    const handleChange = (e) => {
        if(e.target.name === 'email') {
            setEmail(e.target.value);
        } else if(e.target.name === 'password') {
            setPassword(e.target.value);
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const userData = {email, password};
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        const response = await res.json();
        // console.log('Response: ', response);

        setEmail('');
        setPassword('');
        
        if(response.success) {
            localStorage.setItem('token', response.token);
            toast.success('Your Account has been Successfully Logged In!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            localStorage.setItem('myUserEmail', userData.email);
            localStorage.setItem('myUserPass', userData.password);
            localStorage.setItem('myUserId', response.id);
            localStorage.setItem('myUserName', response.name);
            // setTimeout(() => {
                router.push('/dashboard');
            // }, 1000);
        } else {
            toast.error(response.error, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    useEffect(() => {
        // Set Style on body Element
        document.body.style.background = 'linear-gradient(90deg, #C7C5F4, #776BCC)';
      }, []);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.screen}>
		            <div className={styles.screen_content}>
                        <form className={styles.login} method="POST" onSubmit={handleSubmit}>
                            <div className={styles.login_field}>
                                <FontAwesomeIcon className={styles.login_icon} icon={faUser} />
                                <input className={styles.login_input} type="email" id="email" name="email" placeholder="Email" value={email} onChange={handleChange} required />
                            </div>
                            <div className={styles.login_field}>
                                <FontAwesomeIcon className={styles.login_icon} icon={faLock} />
                                <input className={styles.login_input} type={passwordInputType} id="password" name="password" placeholder="Password" value={password} onChange={handleChange} required />
                                <span className={styles.password_toogle_icon}>{passwordToogleIcon}</span>
                            </div>
                            <button className={`${styles.button} ${styles.login_submit}`}>
                                <span className={styles.button_text}>Log In Now</span>
                                <FontAwesomeIcon className={styles.button_icon} icon={faChevronRight} />
                            </button>
                            <p>
                                Don&apos;t have an account yet?
                                <br/>
                                <span className={styles.link}>
                                    <Link href='/register'>Create Now</Link>
                                </span>
                            </p>
                        </form>
                    </div>
                    <div className={styles.screen_background}>
                        <span className={`${styles.screen_background_shape} ${styles.screen_background_shape4}`}></span>
                        <span className={`${styles.screen_background_shape} ${styles.screen_background_shape3}`}></span>
                        <span className={`${styles.screen_background_shape} ${styles.screen_background_shape2}`}></span>
                        <span className={`${styles.screen_background_shape} ${styles.screen_background_shape1}`}></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginUser;