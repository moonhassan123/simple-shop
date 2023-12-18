import React from "react";

const Buttom = () =>{
    return (
        <div className=" bg-sky-400">
                <div className=" grid grid-cols-4 p-14 ">
                    <div className=" text-center p-8">
                        <a className="  uppercase font-semibold tracking-wider text-lg" href="">
                            <span className=" mx-2">X</span>
                            <span className=" mx-2">E</span>
                            <span className=" mx-2">E</span>
                            <span className=" mx-2">R</span>
                            <span>T</span>
                        </a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, laborum!</p>
                       <div className=" flex p-5" >
                       <img className=" p-4" src="/img/facebook (1).svg" alt="" />
                       <img className=" p-5" src="/img/instagram.svg" alt="" />
                       <img className=" p-5" src="/img/envelope-solid.svg" alt="" />
                       </div>
                    </div>
                    <div className=" p-8">
                        <h1 className="uppercase font-semibold tracking-wider text-lg ">Products</h1>
                        <a href="">New Product</a><br />
                        <a href="">Drop Price</a><br />
                        <a href="">Best Sales</a><br />
                    </div>
                    <div className="p-8">
                        <h1 className="uppercase font-semibold tracking-wider text-lg">Information</h1>
                        <a href="">Delivery</a><br />
                        <a href=""> Trems & condition</a><br />
                        <a href="">Abiut Us</a><br />
                        <a href="">Contact Us</a><br />
                    </div>
                    <div className="p-8 ">
                        <h1 className="uppercase font-semibold tracking-wider text-lg">Your account</h1>
                        <a href="">personal onfo</a> <br />
                        <a href="">Adress</a><br />
                        <a href=""> orders</a><br />
                    </div>
                    

                </div>
                <div className=" bg-slate-800 flex p-3 text-zinc-50 ">
                    <h1>©2023 - All rights reserved | Xeert</h1>
                    <h1 className=" ml-80 ">Bkash | Rocket</h1>
                </div>


              </div>

    );
        

};
export default Buttom;