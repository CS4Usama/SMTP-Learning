import styles from '../styles/Login.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from "react";
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faChevronRight, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const RegisterUser = () => {
    const [name, setName] = useState('');
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
        if(e.target.name === 'name') {
            setName(e.target.value);
        } else if(e.target.name === 'email') {
            setEmail(e.target.value);
        } else if(e.target.name === 'password') {
            setPassword(e.target.value);
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const userData = {name, email, password};
        const res = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        const response = await res.json();
        // console.log('Response: ', response);

        setName('');
        setEmail('');
        setPassword('');

        toast.success('Your Account has been Created! Please Login Now...', {
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

    return (
        <>
            <div className={styles.container}>
                <div className={styles.screen}>
                    <div className={styles.screen_content}>
                        <form className={styles.login} method="POST" onSubmit={handleSubmit}>
                            <div className={styles.login_field}>
                                <FontAwesomeIcon className={styles.login_icon} icon={faUser} />
                                <input className={styles.login_input} type="text" id="name" name="name" placeholder="Full Name" value={name} onChange={handleChange} required />
                            </div>
                            <div className={styles.login_field}>
                                <FontAwesomeIcon className={styles.login_icon} icon={faEnvelope} />
                                <input className={styles.login_input} type="email" id="email" name="email" placeholder="Email" value={email} onChange={handleChange} required />
                            </div>
                            <div className={styles.login_field}>
                                <FontAwesomeIcon className={styles.login_icon} icon={faLock} />
                                <input className={styles.login_input} type={passwordInputType} id="password" name="password" placeholder="Password" value={password} onChange={handleChange} required />
                                <span className='password_toogle_icon'>{passwordToogleIcon}</span>
                            </div>
                            <button className={`${styles.button} ${styles.login_submit}`}>
                                <span className={styles.button_text}>Register Now</span>
                                <FontAwesomeIcon className={styles.button_icon} icon={faChevronRight} />
                            </button>
                            <p>
                                Already have an account?
                                <br/>
                                <span className={styles.link}>
                                    <Link href='/'>Login Here</Link>
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
            <style jsx>{`
                .password_toogle_icon {
                    // color: #7875B5;
                    // color: #909499;
                    color: #BEBDDC;
                    cursor: pointer;
                    position: absolute;
                    z-index: 100;
                    right: 0.5em;
                    margin-top: 0.4em;
                }
            `}</style>
        </>
    );
}

export default RegisterUser;
