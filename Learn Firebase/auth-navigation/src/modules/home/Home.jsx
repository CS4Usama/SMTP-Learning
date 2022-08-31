import UseHome from './UseHome';

export default function Home() {
    
    const [doUserLogout] = UseHome();

    return(
        <div>
            Home - If User is Login, User can go Home Component
            <button onClick={doUserLogout}>Logout Now</button>
        </div>
    );
}