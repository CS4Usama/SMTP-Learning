import { useRouter } from "next/dist/client/router";


const ErrorPage = () => {
    const router = useRouter();
    const ctaHandler = () => {
        router.push('/');
    }

    return(
        <div>
            <center>404 Error Page</center>
            <a onClick={() => router.push('/')}>Home </a>
            <a onClick={ctaHandler}> Home2 Handler</a>
        </div>
    );
}

export default ErrorPage;
