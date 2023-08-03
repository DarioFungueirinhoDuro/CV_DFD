import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

function Navbar() { 
    return (
        <div  className="flex flex-col justify-start content-start min-h-screen " >
            <div style={{ marginTop: "15px" }} className='trapezoidP'></div>
            <div style={{ marginTop: "-30px"}} className='trapezoid'></div>
            
        </div>
    );
}

export default Navbar();
// Renderiza tu componente React en su lugar
if (document.getElementById('navbar')) {
    createRoot(document.getElementById('navbar')).render(<StrictMode><Navbar /></StrictMode>);
}