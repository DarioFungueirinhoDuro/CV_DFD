import React from "react";
import 'tailwindcss/tailwind.css';
export default function LabelBar(input) {
    var width  = 100 * ( (4 - parseInt(input.zIndex)) / 4) ;
    var mystyle = {
        backgroundColor:`${input.color}`,
        height: "100%" ,
        width: `${width}%` ,
        zIndex: `${input.zIndex}`
    }
    return (<div style={mystyle} className="rounded-3xl p-5 text-end absolute "> Cosas {input.color}</div>);
}