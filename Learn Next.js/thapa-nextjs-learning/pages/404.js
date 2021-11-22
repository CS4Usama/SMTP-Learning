import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";


const ErrorPage = () => {
    const router = useRouter();
    const ctaHandler = () => {
        router.push('/');
    }

    // Instant Redirect--->
    // useEffect(() => {
    //     router.push('/');
    // }, []);
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000);
    }, []);

    return(
        <div>
            <center>404 Error Page</center>
            <a onClick={() => router.push('/')} className='custom-home-error-style'>Home </a>
            <a onClick={ctaHandler}> Home2 Handler</a>
        </div>
    );
}

export default ErrorPage;
