/* Server-Side Authentication and Securing Pages */

import { getSession, useSession } from 'next-auth/react';

function Blog({ data }) {
    const [session] = useSession();
    console.log({ session });

    return <h1>Blog Page - {data}</h1>
}

export default Blog;


export async function getServerSideProps(context) {
    const session = await getSession(context)
    if(!session) {
        return {
            redirect: {
                destination: '/api/auth/signin?callbackUrl=http://localhost:3000/blog',     // environment variables mein use karna best hai yahan
                permanent: false
            }
        };
    }
    return {
        props: {
            data: 'List of 100 personalized blogs',
            session
        }
    };
}
