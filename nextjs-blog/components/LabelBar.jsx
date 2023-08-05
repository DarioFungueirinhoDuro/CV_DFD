import React from "react";
import 'tailwindcss/tailwind.css';
export default function LabelBar(input) {
    var changeLabel = function () { 
        var color = input.color;
        var zIndex = input.zIndex;
        var actualColor = document.getElementById('label'+zIndex).style.backgroundColor;
        var actualIndex = document.getElementById('label' + zIndex).style.zIndex;
        for (var i = 0; i <= 3; i++) {
            if (actualIndex > 3) {
                document.getElementById('label0').style.zIndex = actualIndex - 5;
            }
        }
        document.getElementById('content').style.backgroundColor = color;
        document.getElementById('label'+input.zIndex).style.zIndex = zIndex + 5;
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
    return (<div id={"label"+input.zIndex} style={mystyle} className="flex flex-row justify-end content-start rounded-2xl">
        <button style={{ width: "100%", height: "100%"}} onClick={changeLabel}>
            <h3>Cosas {input.color}</h3>
        </button>
        </div>);
}