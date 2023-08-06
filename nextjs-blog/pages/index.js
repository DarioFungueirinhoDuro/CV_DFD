import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import Background from '../components/Background';
import LeftMenu from '../components/LeftMenu';
export default function Home() {
  return (
    <div>
      <Head>
        <title>CV_DFD</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className='relative'>
        <LeftMenu></LeftMenu>
        <Background></Background>
      </main>
      <footer>
      </footer>
    </div>
  )
}
