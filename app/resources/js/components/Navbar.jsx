import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

function Navbar() { 
    return (
        <div className="flex flex-row justify-start content-start p-1  ">
            <div className='container bg-slate-300 w-32 h-14  text-center rounded m-1'>
                Logo
            </div>
            <div className='container bg-slate-300 w-32 h-14  text-center rounded m-1'>
                Logo
            </div>
            <div className='container bg-slate-300 w-32 h-14  text-center rounded m-1'>
                Logo
            </div>
            <div className='container bg-slate-300 w-32 h-14  text-center rounded m-1'>
                Logo
            </div>
        </div>
    );
}

export default Navbar();
// Renderiza tu componente React en su lugar
if (document.getElementById('navbar')) {
    createRoot(document.getElementById('navbar')).render(<StrictMode><Navbar /></StrictMode>);
}