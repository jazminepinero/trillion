import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>hack-my-coffee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

   
        <h1 className={styles.title}>
          Welcome to hack-my-coffee!
        </h1>

        
    </div>

  )
}
