import React from 'react';
import Link from 'next/link';
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';


const NavBar = ({ cart }) => {
    const { user, loading, logoutUser, getToken } = useContext(AuthContext);

    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <img className="w-8" src="/logo.svg" alt="Logo" />
                            <span className="ml-3 text-xl">MyShop</span>
                        </a>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-medium">
                        <Link href="/">
                            <a className="mr-5 hover:text-gray-900">Home</a>
                        </Link>
                        <Link href="/about">
                            <a className="mr-5 hover:text-gray-900">About</a>
                        </Link>
                        <Link href="/products">
                            <a className="mr-5 hover:text-gray-900">Products</a>
                        </Link>
                        <Link href="/contact">
                            <a className="mr-5 hover:text-gray-900">Contact Us</a>
                        </Link>
                        <Link href="/checkout">
                            <a className="mr-9 hover:text-gray-900">Cart
                                <small className='position: absolute -mt-2'>({cart.length})</small>
                            </a>
                        </Link>
                    </nav>
                    
                        {
                            user && <FontAwesomeIcon icon={faUserCircle} title={user?.email} className='cursor-pointer h-7 mr-5' />
                        }
                    
                        {
                            user ?
                                <a href='#' onClick={logoutUser}>
                                    <button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm font-medium">
                                        {loading ? 'Loading...' : 'Logout'}
                                    </button>
                                </a>
                            :
                                <Link href='/login'>
                                    <button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm font-medium">
                                        {loading ? 'Loading...': 'Login'}
                                        {/* Login */}
                                    </button>
                                </Link>
                        }

                </div>
            </header>
        </div>
    );
}

export default NavBar;
