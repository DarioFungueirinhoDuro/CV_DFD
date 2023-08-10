import React from "react";
import styled, { keyframes } from "styled-components";

const glow = keyframes`
  from {
    boxShadow:"0 0 60px 60px #000,0 0 100px 120px #39FF14"
  }

  to {
    boxShadow:"0 0 180px 60px #000,0 0 300px 120px #39FF14"
  }
`;

const Aura = styled.div`
  background-color: black;
  width:205px;
  height:205px;
  border-radius:50%;
  box-shadow:0 0 60px 60px #000,0 0 100px 120px #39FF14;
  animation : ${glow} 1.5s ease-in-out alternate infinite;
`;

const AuraComponent = () => <Aura></Aura>
export default function Background(){
    return(
        
    <div className='absolute bg-transparent w-screen min-h-screen'>
        <div id='backgroundContiner' className="bg-black h-screen flex flex-row relative justify-center items-center z-0 ">
            <AuraComponent suppressHydrationWarning></AuraComponent>
            
        </div>
    </div>
  );
}
/*<div id='light' style={{width:"200px" , height:"200px" , borderRadius:"50%" , boxShadow:"0 0 60px 60px #000,0 0 100px 120px #39FF14"
,animation:`${glow} 5s ease-in-out alternate infinite`}} 
            className='bg-black glow'></div> <div id='darkCircle' style={{width:"200px" , height:"200px" , borderRadius:"50%" }} className='bg-black absolute' ></div>*/