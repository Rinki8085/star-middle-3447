import React from "react";
import Navbar from "../navbar";
import CBlog from "./Blog/centerBlog/centerBlog";
import LSBar from "./Blog/LSidebar/lSidebar";
import RSBar from "./Blog/RSidebar/rSbar";
import Footermain from "./Footermain/footermain";
import TopNavbar from "./TopNavbar/TopNavbar";


const Homepage=() =>{
  
    return (
        <div>
          <TopNavbar />
          <Navbar />
          <div>
            <RSBar/>
            <CBlog/>
            <LSBar />
          </div>
          <Footermain />
        </div>
      
    )
  
}

export default Homepage