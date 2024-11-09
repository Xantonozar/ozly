"use client";
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-500 p-4">
    <div className="flex flex-row justify-between items-center md:flex-row md:justify-between">
  <div className="text-white text-2xl md:pl-10 font-bold">Ozly</div>

  <div className="flex flex-row justify-between  md:flex-row items-center">
    <ul className="hidden md:flex md:flex-row md:space-x-8 space-y-4 md:space-y-0">
      <li className="text-green-200 hover:text-green-900 transition duration-300 ease-in-out transform hover:scale-110 hover:text-lg text-lg font-semibold">
        <a href="/">Home</a>
      </li>
      <li className="text-green-200 hover:text-green-900 transition duration-300 ease-in-out transform hover:scale-110 hover:text-lg text-lg font-semibold">
        <a href="/about">About</a>
      </li>
      <li className="text-green-200 hover:text-green-900 transition duration-300 ease-in-out transform hover:scale-110 hover:text-lg text-lg font-semibold">
        <a href="/contact">Contact Us</a>
      </li>
      <li className="text-green-200 hover:text-green-900 transition duration-300 ease-in-out transform hover:scale-110 hover:text-lg text-lg font-semibold">
        <a href="/shorten">Shorten</a>
      </li>
      <li className="text-green-200 hover:text-green-900 transition duration-300 ease-in-out transform hover:scale-110 hover:text-lg text-lg font-semibold">
        <a href="/url">URL</a>
      </li>
      <li className="text-green-200 hover:text-green-900 transition duration-300 ease-in-out transform hover:scale-110 hover:text-lg text-lg font-semibold">
       
      </li>
    </ul>
    <div className="hidden flex-row justify-end md:flex space-x-4 mt-4 md:mt-0">
      <button className="bg-green-400 text-black font-bold px-4 py-2 rounded hover:bg-green-700 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
        <a href="/shorten">Try Now</a>
      </button>
      <button className="bg-green-600 text-black font-bold px-4 py-2 rounded hover:bg-green-700 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
        <a href="https://github.com/Xantonozar/ozly.git">GitHub</a>
      </button>
    </div>

   
  </div>
  <div className="text-white text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
    &#9776;
  </div>
</div>
<div className={`sidebar md:hidden transform transition-transform duration-300 ${isOpen ? 'translate-x-0 flex' : 'translate-x-full hidden'}  flex-col`} style={{ height: '100%', width: '50.66%' }}>
  <nav className="flex flex-col mt-10">
    <a href="/home" className="py-2 px-4 hover:bg-green-900">Home</a>
    <a href="/about" className="py-2 px-4 hover:bg-green-900">About</a>
    <a href="/shorten" className="py-2 px-4 hover:bg-green-900">Services</a>
    <a href="/contact" className="py-2 px-4 hover:bg-green-900">Contact</a>

  </nav>
  <div className="flex flex-row mb-4 justify-start gap-4 md:hidden space-x-4 mt-4 md:mt-0">
      <button  className="bg-green-400 text-black font-bold px-4 py-2 rounded hover:bg-green-700 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
        <a href="/shorten">Try Now</a>
      </button>
      <button className="bg-green-600 text-black font-bold px-4 py-2 rounded hover:bg-green-700 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
      <a href="https://github.com/Xantonozar/ozly.git">GitHub</a>
      </button>
    </div>
</div>
    </nav>
  );
};
export default Navbar;