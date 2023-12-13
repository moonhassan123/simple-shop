import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Products from "../products/products";

const Home = () => {
    
    return(
        <div className=" grid grid-cols-5">
            <div className=" col-span-4 h-[96vh]">
                <h1 className=" text-center text-3xl text-bule-200 font-extrabold">shop</h1>
                <Products></Products> 
            
            </div>
              <div className=" bg-zinc-500 font-bold text-center">
                <h1 className=" text-4xl text-yellow-300">Cart</h1>
              </div>

        </div>
    );
};
export default Home;