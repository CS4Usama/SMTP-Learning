import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello World</h1>
      {/* Simple Linking or Routing using Anchor Tag */}
      {/* <a href='/'></a> */}
      <a href='/blog/further'>Simple Link </a>
      {/* Next.js Routing */}
      <Link href='/blog/further'> Next.js Route</Link>
    </div>
  )
}
