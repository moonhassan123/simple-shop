import React from "react";
import {removeitem } from "../../FackDatanase";

 
const ProductCard  = ({product,addTocartHandler}) => {
  // console.log(props);
  // const{product,addTocartHandler} = props



  

    // remove frm card 
    function removeFromCardHandler(id){
      removeitem   (id);
    }
    return (
        <div
        className="border drop-shadow-2xl border-red-400 rounded-lg text-center">
         <img src={product.img} alt="" />

         <h1>{product.name}</h1> 
       <h3>price : {product.price}</h3>
       <button 
       onClick={ () => {addTocartHandler(product);
        }}
         className=" bg-lime-300 px-3 rounded-md ">Add to cart
         </button>
         <button 
         onClick={() => {
          removeFromCardHandler(product.id);

         }} 
        className=" bg-blue-600  rounded-md px-7 mt-2">Remove - Card</button>
       

      </div>
    )
    

};
export default ProductCard;