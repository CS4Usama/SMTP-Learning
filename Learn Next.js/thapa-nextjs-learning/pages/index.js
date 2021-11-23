import styles from '../styles/Home.module.css';
import Link from 'next/link';
import SomeStyleTestingComp from '../components/SomeComp';
import Image from 'next/image';
import Head from 'next/head';


export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();      // Objects Array
    return {
        props: {
            // data           // data: data
            usama: data      // Key Pair Value
        },
    }
}


export default function Home({usama}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Next.js Learning</title>
                <meta name='description' content='Learning Next.js' />
                <meta name='keywords' content='HTML, CSS, JavaScript, React.js, Next.js' />
                <meta name='author' content='Usama' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
            </Head>

            <SomeStyleTestingComp />

            <h1>Hello World</h1>

            {/* Simple Linking or Routing using Anchor Tag */}
            {/* <a href='/'>Home</a> */}
            <a href='/blog/further'>Simple Link </a>
            {/* Next.js Routing */}
            <Link href='/blog/further'> Next.js Route</Link>

            <Image src='/favicon.ico' alt='some image' width='100' height='100' />
            <Image src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='some image' width='100' height='100' />
        
            {
                usama.slice(0,5).map((elem) => {
                    return(
                        <div key={elem.id}>
                            <h6>ID: {elem.id}</h6>
                            <h5>TITLE: {elem.title}</h5>
                            <h5>BODY: {elem.body}</h5>
                        </div>
                    );
                })
            }
        </div>
    );
}
