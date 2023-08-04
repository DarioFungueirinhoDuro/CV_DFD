import React from "react";
import LabelBar from "./LabelBar";
import 'tailwindcss/tailwind.css';
export default function Navbar(){
    return (
        <div style={{height: '10%' }} className= "">
            <div className="flex flex-row-reverse h-full justify-end content-end  relative">
                <LabelBar color="green" zIndex="0"></LabelBar>
                <LabelBar color="brown" zIndex="1"></LabelBar>
                <LabelBar color="red" zIndex="2"></LabelBar>
                <LabelBar color="yellow" zIndex="3"></LabelBar>
            </div>
        </div>
    );
}