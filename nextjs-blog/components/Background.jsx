import React from "react";

export default function Background(){
    return(
    <div className='absolute bg-transparent w-screen min-h-screen'>
        <div id='backgroundContiner' className="bg-black h-screen flex flex-row relative justify-center items-center z-0 ">
            <div id='light' style={{width:"200px" , height:"200px" , borderRadius:"50%" , boxShadow:"0 0 60px 60px #000,0 0 100px 120px #39FF14"}} className='bg-black'></div>
            <div id='darkCircle' style={{width:"200px" , height:"200px" , borderRadius:"50%" }} className='bg-black absolute' ></div>
        </div>
    </div>
  );
}