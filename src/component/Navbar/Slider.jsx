import React, { Component } from 'react'
import { Carousel } from 'flowbite-react';

export class Slider extends Component {
  render() {
    return (
      <div className=' bg-neutral-300 mt-[88px]'>
      
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className=" h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white  bg-right-bottom p-5  bg-my-img bg-no-repeat bg-cover">
        
            
                
                <h1 className=" text-5xl font-bold ">Bicycle & Spin</h1>
                <p className=" p-6">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Voluptatibus ea aliquid <br /> amet illo fuga sint, tempore nobis.</p>
                <a href=""><button className=" bg-green-400 hover:bg-blue-600 px-12 py-2 rounded-se-2xl">Discover More</button></a>    
        </div>
        <div className=" h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white  bg-right-bottom p-5  bg-my-img bg-no-repeat bg-cover">
        
             <h1 className=" text-5xl font-bold ">30 % oFF</h1>
                <p className=" p-6">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Voluptatibus ea aliquid <br /> amet illo fuga sint, tempore nobis .</p>
                <a href=""><button className=" bg-emerald-400 hover:bg-fuchsia-500 px-12 py-2 rounded-ee-2xl">Shop Now</button></a>
        </div>
        <div className=" h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white  bg-right-bottom p-5  bg-my-img bg-no-repeat bg-cover">
        
             <h1 className=" text-5xl font-bold ">Free delivery</h1>
                <p className=" p-6">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Voluptatibus ea aliquid <br /> amet illo fuga sint, tempore nobis .</p>
                <a href=""><button className=" bg-emerald-400 hover:bg-fuchsia-500 px-12 py-2 rounded-ee-2xl">Click Hear</button></a>
        </div>
        <div className=" h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white  bg-right-bottom p-5  bg-my-img bg-no-repeat bg-cover">
        
             <h1 className=" text-5xl font-bold ">Discount system</h1>
                <p className=" p-6">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Voluptatibus ea aliquid <br /> amet illo fuga sint, tempore nobis .</p>
                <a href=""><button className=" bg-emerald-400 hover:bg-fuchsia-500 px-12 py-2 rounded-ee-2xl">Submit</button></a>
        </div>
        
        
      </Carousel>
    </div>
      </div>
    )
  }
}

export default Slider;
