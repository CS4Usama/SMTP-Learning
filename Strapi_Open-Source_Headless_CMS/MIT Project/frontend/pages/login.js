import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect, useContext } from "react";
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faChevronRight, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import AuthContext from "../context/AuthContext";


const LoginUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const router = useRouter();

    // const passwordToogleIcon = (
    //     <FontAwesomeIcon
    //         icon={passwordVisibility ? faEyeSlash : faEye}
    //         onClick={(e) => setPasswordVisibility(passwordVisibility => !passwordVisibility)}
    //     />
    // );
    // const passwordInputType = passwordVisibility ? "text" : "password";

    // const handleChange = (e) => {
    //     if (e.target.name === 'email') {
    //         setEmail(e.target.value);
    //     } else if (e.target.name === 'password') {
    //         setPassword(e.target.value);
    //     }
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const userData = { email, password };
    //     const res = await fetch('/api/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(userData)
    //     });
    //     const response = await res.json();
    //     // console.log('Response: ', response);

    //     setEmail('');
    //     setPassword('');

    //     if (response.success) {
    //         localStorage.setItem('token', response.token);
    //         toast.success('Your Account has been Successfully Logged In!', {
    //             position: "top-center",
    //             autoClose: 3000,
    //             hideProgressBar: true,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //         });
    //         localStorage.setItem('myUserEmail', userData.email);
    //         localStorage.setItem('myUserPass', userData.password);
    //         localStorage.setItem('myUserId', response.id);
    //         localStorage.setItem('myUserName', response.name);
    //         // setTimeout(() => {
    //         router.push('/dashboard');
    //         // }, 1000);
    //     } else {
    //         toast.error(response.error, {
    //             position: "top-center",
    //             autoClose: 3000,
    //             hideProgressBar: true,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //         });
    //     }
    // }

    // useEffect(() => {
    //     // Set Style on body Element
    //     document.body.style.background = 'linear-gradient(90deg, #C7C5F4, #776BCC)';
    // }, []);



    const [input, setInput] = useState("");
    const { loginUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(input);
    }

    return (
        <>
            <section className="h-screen">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="w-full"
                                alt="Sample Image"
                            />
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <form onSubmit={handleSubmit}>
                                {/* Email Input */}
                                <div className="mb-6">
                                    <input
                                        type="email"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email Address"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                    />
                                </div>

                                {/* Password Input */}
                                {/* <div className="mb-6">
                                    <input
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password"
                                    />
                                </div> */}

                                <div className="flex justify-between items-center mb-6">
                                    <div className="form-group form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            id="exampleCheck3"
                                            // checked
                                        />
                                        <label className="form-check-label inline-block text-gray-800 cursor-pointer" for="exampleCheck3">Remember Me</label>
                                    </div>
                                    {/* <Link
                                        href="/register"
                                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                                    > */}
                                        Passwordless Web3 Authentication
                                    {/* </Link> */}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LoginUser;