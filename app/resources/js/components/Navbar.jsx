import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

function Navbar() { 
    return (
        <div className="flex flex-row justify-center content-center p-1 bg-red-800">
            <div className='trapezoid'></div>
        </div>
    );
}

export default Navbar();
// Renderiza tu componente React en su lugar
if (document.getElementById('navbar')) {
    createRoot(document.getElementById('navbar')).render(<StrictMode><Navbar /></StrictMode>);
}