import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Products from "../products/products";
import Buttom from "../Navbar/Buttom";
import Slider from "../Navbar/Slider";
import Cart from "../Cart/Cart";
import { addToCard, getShoppingCard } from "../../FackDatanase";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Home = () => {
    const [products, setproducts] =useState([]);

    const [cart, setCart]= useState([])
     // data add function


     useEffect(() => {
        fetch("products.json")
       .then((res)=>res.json())
        .then((data)=>setproducts(data));
       },[]);
    
       useEffect(()=>{
        const storeCard = getShoppingCard();

       },[]);

   const addTocartHandler =(product)=>{
//     console.log(product);
    
  let newCart =[... cart,product]
    setCart(newCart)
     addToCard(product.id)
    };
    
    return(
        <div className=" " >
            
            <div className=" grid grid-cols-5 ">
            <div className=" col-span-4 ">
                <h1 className=" text-center text-3xl text-bule-200 font-extrabold">shop</h1>
                <Products addTocartHandler={addTocartHandler} products ={products}></Products>
                
                 
            
            </div>
              
             <div>
                <Cart cart= {cart}></Cart>
             </div>

        </div>
        
        </div>
    );
};
export default Home;