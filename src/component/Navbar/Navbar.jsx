import { Link } from "react-router-dom"
 import React, { useState } from "react";
import { Bars4Icon,XCircleIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
    const[isOpen,setIsOpen]=useState(false)
    const navbarItems = [
        
        {id : 1, name:"Home", path: "/home"},
        //  {id : 1, name:"Home", path: "/"},
        {id : 2, name:"Shop", path: "/Shop"},
        {id : 3, name:"Services", path: "/services"},
        {id : 4, name:"Contact", path: "/contact"},
        {id : 4, name:"Login", path: "/Login"},
    ];

    
    return (
        <nav className=" bg-red-600">
            <div
                onClick={() => {
                    setIsOpen(!isOpen)
                }}
                className=" md: hidden"
            >
                {isOpen ? (
                    <XCircleIcon className=" h-6 w-6 text-blue-600 cursor-pointer" />
                ) : (
                    <Bars4Icon className="h-6 w-6 text-blue-600 font-bold cursor-pointer" />
                )}
            </div>
            <ul
                className={` md:flex justify-center gap-10 font-medium absolute md:static  
             ${isOpen ? "top-10" : "-top-40"}`}
            />

            <div className="bg-blue-950 p-3">
                <div
                    className=" md:hidden"
                    onClick={() => {
                        setIsOpen(!isOpen)
                    }}
                >
                    {isOpen ? (
                        <XCircleIcon className="h-6 w-9 text-yellow-100 font-semibold" />
                    ) : (
                        <Bars4Icon className="h-6 w-9 text-yellow-100 font-semibold" />
                    )}
                </div>
                <div className=" md:flex justify-around text-yellow-100">
                    <h1 className="text-4xl font-extrabold md:text-left text-center">online shop</h1>
                    <ul
                        className={` bg-blue-950 p-3 md:flex justify-between gap-10    md:static font-bold md: text-yellow-50 rounded-3xl  duration-1000 text-blue absolute first: ${
                            isOpen ? "top-24" : "-top-96"
                        }`}

                    >
                        {navbarItems.map((item) => {
                            return (
                                <li
                                    key={item.id}
                                    className=" bg-orange-500 md:bg-blue-950 rounded-md text-center my-2 "
                                >
                                    <Link to={item.path}  >{item.name}</Link>
                                    {/* target="_blank" */}
                                    
                                </li>
                            )
                        })}
                        {/* <li className=" bg-orange-500 md:bg-blue-950 rounded-md text-center my-2 ">Home</li>
                        <li className=" bg-orange-500 md:bg-blue-950 rounded-md text-center my-2">About</li>
                        <li className=" bg-orange-500 md:bg-blue-950 rounded-md text-center my-2">services</li>
                        <li className=" bg-orange-500 md:bg-blue-950 rounded-md text-center my-2">Contact</li> */}
                    </ul>
                </div>
            </div>
                 </nav>
     );
 };

export default Navbar;