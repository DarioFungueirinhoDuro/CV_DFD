import Head from 'next/head';
import 'tailwindcss/tailwind.css';
export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>CV_DFD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="bg-black h-screen flex flex-row relative justify-center items-center">
        <div style={{width:"200px" , height:"200px" , borderRadius:"50%" , boxShadow:"0 0 60px 60px #000,0 0 100px 120px #39FF14"}} className='bg-black'></div>
      </main>
      <footer>
      </footer>
    </div>
  )
}
