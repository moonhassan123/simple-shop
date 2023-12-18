import React from "react";
import Navbar from "../component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Buttom from "../component/Navbar/Buttom";
import Slider from "../component/Navbar/Slider";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Buttom></Buttom>
            
           
            

            
        </div>
    );
};
export default MainLayout;