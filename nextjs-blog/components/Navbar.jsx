import React from "react";
import LabelBar from "./LabelBar";
import 'tailwindcss/tailwind.css';
export default function Navbar(){
    return (
        <div style={{minHeight:"10%",minWidth:"100%",zIndex:"1"}}>
            <div style={{height:"10vh" , width:"100%"}} className="flex flex-row-reverse justify-end relative">
                <LabelBar color="green" zIndex="0"></LabelBar>
                <LabelBar color="brown" zIndex="1"></LabelBar>
                <LabelBar color="red" zIndex="2"></LabelBar>
                <LabelBar color="orange" zIndex="3"></LabelBar>
            </div>
        </div>
    );
}
