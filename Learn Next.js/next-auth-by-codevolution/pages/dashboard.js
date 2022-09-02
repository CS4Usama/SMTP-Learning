/* Client-Side Authentication and Securing Pages */

import { useState, useEffect } from 'react';
import { getSession, signIn } from 'next-auth/react';


function Dashboard() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // (async function securePage () {
        const securePage = async () => {
            const session = await getSession();
            console.log({ session });
            if(!session) {     // session == null
                signIn();
            } else {
                setLoading(false);
            }
        }
        securePage();
        // })();
    }, [])

    if (loading) {
        return <h2>Loading...</h2>
    }
    return <h1>Dashboard Page</h1>
}

export default Dashboard;
