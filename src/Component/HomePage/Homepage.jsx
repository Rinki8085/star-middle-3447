import React from "react";
import Navbar from "./Navbar/navbar";
import CBlog from "./Blog/centerBlog/centerBlog";
import LSBar from "./Blog/LSidebar/lSidebar";
import RSBar from "./Blog/RSidebar/rSbar";
import Footermain from "./Footermain/footermain";
import Footers from "./footersecond/footers";
import TopNavbar from "./TopNavbar/TopNavbar";
import "./Navbar/navbar.css"

const Homepage=() =>{
  
    return (
        <div>
          <TopNavbar />
          <Navbar />
          <div className="blogPost">
            <RSBar/>
            <CBlog/>
            <LSBar />
          </div>
          <Footermain />
          <Footers />
        </div>
      
    )
  
}

export default Homepage