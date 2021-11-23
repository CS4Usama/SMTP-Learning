import { useRouter } from "next/dist/client/router";

export const getStaticPaths = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    const paths = data.map((elem) => {
        return {
            params: {
                // dynamic === dynamic page fileName
                dynamic: elem.id.toString()
            }
        }
    });

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.dynamic;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();      // Objects Array
    return {
        props: {
            // data           // data: data
            usama: data      // Key Pair Value
        },
    }
}

const DynamicRouting = ({usama}) => {
    const {id, title, body} = usama;
    const router = useRouter();
    const dynamicNumber = router.query.dynamic;

    return(
        <div>
            <center>Dynamic Routing {dynamicNumber}</center>
            <h5>ID: {id}</h5>
            <h5>TITLE: {title}</h5>
            <h5>BODY: {body}</h5>
        </div>
    );
}

export default DynamicRouting;
