import React from "react";
import { addToCard ,removeitem } from "../../FackDatanase";
import { removeItem } from "localforage";
 
const ProductCard  = ({product}) => {



  // data add function
  const addTocartHandler =(id)=>{

    addToCard(id);
    };

    // remove frm card 
    function removeFromCardHandler(id){
      removeItem (id);
    }
    return (
        <div
        className="border drop-shadow-2xl border-red-400 rounded-lg text-center">
         <img src={product.img} alt="" />
         <h1>{product.name}</h1> 
       
       <button onClick={ () => {addTocartHandler(product.id);
        }}
         className=" bg-lime-300 px-3 rounded-md ">Add to cart
         </button>
         <button onClick={() => {
          removeItem(product.id);

         }} 
        className=" bg-blue-600  rounded-md px-7 mt-2">Remove - Card</button>
       

      </div>
    )
    

};
export default ProductCard;