import React from "react";
import 'tailwindcss/tailwind.css';
export default function LabelBar(input) {
    var changeLabel = function () { 
        alert('Label change '+ input.color);
    }
    var width = 100 * ((4 - parseInt(input.zIndex)) / 4);
    var marginLeft = input.zIndex == 3 ? 0 : (-15);
    var mystyle = {
        backgroundColor:`${input.color}`,
        height: "100%" ,
        width: `26%` ,
        zIndex: `${input.zIndex}`,
        marginLeft: `${marginLeft}px` 
    }
    return (<div style={mystyle} className="flex flex-row justify-end content-start rounded-2xl">
        <button style={{ width: "100%", height: "100%"}} onClick={changeLabel}>
            <h3>Cosas {input.color}</h3></button>
            </div>);
}