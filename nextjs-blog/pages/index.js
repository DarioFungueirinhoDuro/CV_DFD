import Head from 'next/head';
import 'tailwindcss/tailwind.css';
export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>CV_DFD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className='relative'>
        <div id='left-menu' className='w-24 min-h-screen bg-transparent text-white z-10 absolute '>
          <div className='' style={{borderRight:"1px solid #39FF14" , borderBottom:"1px solid #39FF14" , boxShadow:"0 0 30px 3px #39FF14" , width:"96px" , height:"96px"}}>
            <button className='w-full h-full'></button>
          </div>
          <div className=' flex flex-col justify-center items-start h-full' style={{borderRight:"1px solid #39FF14" , borderBottom:"1px solid #39FF14" , boxShadow:"0 0 30px 3px #39FF14" , width:"96px"}}>
            <div className='w-full min-h-full'></div>
          </div>
        </div>

        <div className='absolute bg-transparent w-screen min-h-screen'>
          <div id='backgroundContiner' className="bg-black h-screen flex flex-row relative justify-center items-center z-0 ">
            <div id='light' style={{width:"200px" , height:"200px" , borderRadius:"50%" , boxShadow:"0 0 60px 60px #000,0 0 100px 120px #39FF14"}} className='bg-black'></div>
            <div id='darkCircle' style={{width:"200px" , height:"200px" , borderRadius:"50%" }} className='bg-black absolute' ></div>
          </div>
        </div>
        
        
      </main>
      <footer>
      </footer>
    </div>
  )
}
