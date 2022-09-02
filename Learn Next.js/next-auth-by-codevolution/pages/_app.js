import '../styles/globals.css';
import Navbar from '../components/Navbar';
import '../components/Navbar.css';
import { SessionProvider } from 'next-auth/react';


function MyApp({ Component, pageProps:{session, ...pageProps} }) {
    return (
        <SessionProvider session={session}>
            <Navbar />
            <Component {...pageProps} />
        </SessionProvider>
    );
}

export default MyApp;

// next-auth session provider improves performance, reduces network calls and avoids page flicker when rendering
