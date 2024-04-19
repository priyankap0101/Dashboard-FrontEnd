/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

function Header({ toggleSidebar }) {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="text-2xl font-bold"></div>
            <button className="md:hidden" onClick={toggleSidebar}>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
            <nav className="hidden md:flex md:space-x-4 font-extrabold text-xl mr-5" >
                <a href="#" className="hover:text-gray-300">Home</a>
              
                <a href="#" className="hover:text-gray-300">Profile</a>
                
                <a href="#" className="hover:text-gray-300">Login</a>
                <a href="#" className="hover:text-gray-300">Signup</a>
            </nav>
        </header>
    );
}

export default Header;
