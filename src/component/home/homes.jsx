import React from "react";
import Slider from "../Navbar/Slider";


const Homes = () => {
    
    return(
        <div className=" bg-stone-100">
            <Slider></Slider>
            
              <div className="flex text-center p-9">
                 <div className="my-8">
                    <h1 className=" text-2xl font-bold">Discount system</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Omnis cupiditate inventore, <br /> atque soluta aut eius?</p>
                 </div>
                 <div className=" mx-24 my-8">
                 <h1 className=" text-2xl font-bold">Free delivery</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Omnis cupiditate inventore, <br /> atque soluta aut eius?</p>
                 </div>
                 <div className="my-8 ">
                 <h1 className=" text-2xl font-bold">Support 24/7</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Omnis cupiditate inventore, <br /> atque soluta aut eius?</p>
                 </div>
              </div>
              <div className=" flex p-8">
                <div className=" p-2">
                    <img src="/img/Kaptir_2.0_Shoes_White_H00276_01_standard.avif" alt="" />
                    <div className=" flex {my-400px}">
                    <a href=""><button className="bg-red-300 hover:bg-zinc-600 px-9 py-2 rounded-s-md">Shirt</button></a>
                    </div>
                </div>
                <div className=" p-2">
                <img src="/img/RPT-01_Sport_On-Ear_Headphones_Black_CM5015_01_standard.avif" alt="" />
                    <div className=" flex {my-400px}">
                    <a href=""><button className="bg-red-300 hover:bg-zinc-600 px-9 py-2 rounded-s-md">Shirt</button></a>
                    </div>
                </div>
                <div className=" p-2">
                <img src="/img/Steel_Straw_Metal_Bottle_600_ML_White_EX7316_01_standard.avif" alt="" />
                    <div className=" flex {my-400px}">
                    <a  href=""><button className="bg-red-300 hover:bg-zinc-600 px-9 py-2 rounded-s-md">Shirt</button></a>
                    </div>
                </div>
                <div className=" p-2">
                <img src="/img/Alliance_Sackpack_White_FZ6823_01_standard.avif" alt="" />
                    <div className=" flex {my-400px}">
                    <a href=""><button className="bg-red-300 hover:bg-zinc-600 px-9 py-2 rounded-s-md">Shirt</button></a>
                    </div>
                </div>
              </div>

              <div>
                <div>
                    <h1 className=" text-5xl text-center p-24">Top Trending</h1>

                </div>
                <div>
                    <p className=" text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ullam ipsa deserunt voluptas ipsum aliquam quae temporibus quaerat eius aspernatur optio, ducimus impedit quis  praesentium necessitatibus aperiam! Quisquam, vitae possimus?</p>
                </div>
                <div className=" text-center p-14">
                <a className=" p-9 " href=""><button className="bg-red-300 hover:bg-zinc-600 px-12 py-2 rounded-s-md">Net Products</button></a>


                <a className=" p-9" href=""><button className="bg-red-300 hover:bg-zinc-600 px-12 py-2 rounded-bl-md">Price Drop</button></a>



                <a className="p-9" href=""><button className="bg-red-300 hover:bg-zinc-600 px-12 py-2 rounded-bl-md">Best Salas</button></a>
                
    
                </div>
              </div>


              <div className=" flex">
                <div className=" ml-6">
                 <img className=" w-96 " src="/img/ca.png" alt="" />
                </div>
                <div className=" text-center px-28 ml-14">
                    <h1 className=" text-4xl">Bages & Shoes</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, vero! <br /> Earum maiores et dolor beatae.</p>
                    <button className=" border-l rounded-tr-lg hover: bg-slate-200 p-2  hover:bg-stone-700 m-7">Descover More</button>
                </div>
              </div>
              

              
        </div>
    )
};
export default Homes;