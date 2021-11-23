import styles from '../styles/Home.module.css'
import Link from 'next/link';
import SomeStyleTestingComp from '../components/SomeComp';

export default function Home() {
  return (
    <div className={styles.container}>
      <SomeStyleTestingComp />
      <h1>Hello World</h1>
      {/* Simple Linking or Routing using Anchor Tag */}
      {/* <a href='/'>Home</a> */}
      <a href='/blog/further'>Simple Link </a>
      {/* Next.js Routing */}
      <Link href='/blog/further'> Next.js Route</Link>
    </div>
  )
}
