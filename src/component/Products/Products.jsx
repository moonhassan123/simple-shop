
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
          
const Products = ({addTocartHandler, products}) =>  {


      
      const [currentPage, setCurrentPage] = useState(1);
      // find total products count
      // const totalProducts =products .length
      //     //hoe many time want to show in a single page 
      //     const itemPerPage = 12;
      //     // find total page 
      //     const totalPage = Math.ceil (totalProducts / itemPerPage);
      //     // total button from totalPage 
      //     let totalButton =[] ;
      //     for (let i = 0 ; i < totalPage ;  i++) {
      //        totalButton.push (i)
      //     }
      //     let firstValue = (currentPage - 1) * itemPerPage;
      //     lastValue = firstValue + itemPerPage

      //     let perPageProduct = products .slice  (firstValue , lastValue)
  return (
    <div className=" grid grid-cols-4 gap-4 p-3">
     {
      products.map((product ,idx) =>(
         <ProductCard
          key={product.id}
           product={product}
           addTocartHandler= {addTocartHandler}>

         </ProductCard>
         ))}
    </div>
  )
}
export default Products;
