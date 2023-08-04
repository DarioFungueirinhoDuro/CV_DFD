import Head from 'next/head';
import Navbar from '../components/Navbar.jsx';
import Content from '../components/Content.jsx';
import 'tailwindcss/tailwind.css';
export default function Home() {
  return (
    <div className='bg-gray-500'>
      <Head>
        <title>CV_DFD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="flex flex-row justify-center content-start">
        <div id='checkeo' className='container min-h-screen w-full'>
          <Navbar></Navbar>
          <Content></Content>
        </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}
