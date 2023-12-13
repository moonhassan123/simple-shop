import React, {useEffect, useState } from "react"
import ProductCard from "../productCard/productCard";
          
const Products = () => {


      const [products, setproducts] =useState([]);
    useEffect(() => {

       fetch("products.json")
      .then((res)=>res.json())
       .then((data)=>setproducts(data));
      },[]);
  return (
    <div className=" grid grid-cols-4 gap-4 p-3">
     {
      products.map((product) =>(
         <ProductCard key={product.id} product={product}>

         </ProductCard>
         ))}
    </div>
  )
}
export default Products;
