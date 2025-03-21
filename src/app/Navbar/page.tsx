"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'

const Navbar = () => {
    // let navi= 1;
    const router = useRouter();
    const pathname = usePathname(); 

    return (
        <nav className="bg-gr border-gray-200 dark:bg-gray-900 bg-gradient-to-r from-blue-100 to-purple-500 text-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse h-13">
                    <img src="/zP.svg" className="w-50 h-80 filter brightness-0" alt="Flowbite Logo" />
                    {/* <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white font">Zen</span>
                    <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Path</span> */}
                </a>
                
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/HomeComponents" className={`block py-2 px-3  rounded-sm md:bg-transparent  md:p-0 ${pathname === "/HomeComponents" ? "text-black font-bold" : "text-white"}`} aria-current="page">Home</a>
                        </li>
                        <li>
                             <a href="/Therapy" className={`block py-2 px-3  rounded-sm md:bg-transparent  md:p-0 ${pathname === "/Therapy" ? "text-black font-bold" : "text-white"}`} aria-current="page">Therapy Sessions</a>
                        </li>
                        <li>
                            <a href="/Services" className={`block py-2 px-3  rounded-sm md:bg-transparent  md:p-0 ${pathname === "/Services" ? "text-black font-bold" : "text-white"}`}>Services</a>
                        </li>
                        <li>
                            <a href="/About" className={`block py-2 px-3  rounded-sm md:bg-transparent  md:p-0 ${pathname === "/About" ? "text-black font-bold" : "text-white"}`}>About</a>
                        </li>
                        {/* <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">LGBTQ</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                        </li> */}
                        {/* <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">For Organisations</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar





{/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button> */}