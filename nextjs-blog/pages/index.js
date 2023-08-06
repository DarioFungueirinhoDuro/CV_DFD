import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import Background from '../components/Background';
import LeftMenu from '../components/LeftMenu';
export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>CV_DFD</title>
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
