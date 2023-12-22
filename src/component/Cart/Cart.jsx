import React, { Component } from 'react'

const Cart = ({cart}) => {

    let totalPrice = 0;
    let ShippingCost = 0;
    for (const product of cart){
        totalPrice = totalPrice + product . price;
        ShippingCost = ShippingCost + product.shipping
    }
  return(
    
        <div className=" bg-zinc-500 ">
    <h1 className="">cart items:{cart.length} </h1>
    <h1 className="">Total Price:{totalPrice} </h1>
    <h1 className="">Shipping Cost: {ShippingCost}</h1>
    <h1 className=""></h1>
    

  </div>
    
  ) 
    
}

export default Cart