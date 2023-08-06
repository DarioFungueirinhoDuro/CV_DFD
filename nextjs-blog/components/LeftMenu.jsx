import React from "react";

export default function LeftMenu(){
    var lightBox = {
    borderRight:"1px solid #39FF14",
    borderBottom:"1px solid #39FF14",
    boxShadow:"0 0 30px 3px #39FF14",
    width:"96px",
    height:"96px"
};
    return(
    <div id='left-menu' style={lightBox} className='w-24 min-h-screen bg-transparent text-white z-10 absolute '>
        <div style={{borderBottom:"1px solid #39FF14",width:"96px",height:"96px",}}>
            <button className='w-full h-full'></button>
        </div>
        <div className=' flex flex-col justify-center items-start w-auto h-auto' >
            <div className='w-auto h-auto'></div>
        </div>
    </div>
  );
}