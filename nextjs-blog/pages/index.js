import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import Background from '../components/Background';
import LeftMenu from '../components/LeftMenu';
export default function Home() {
  return (
    <div>
      <Head>
        <title>CV_DFD</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch&family=Dosis:wght@300&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
        <link rel='stylesheet' href='../styles/glows.css'></link>
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
