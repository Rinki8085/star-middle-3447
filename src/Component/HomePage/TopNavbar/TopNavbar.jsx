import React from 'react'
import "./topNavbar.css";
import { Link as RouteLink } from 'react-router-dom';
import { Box, Flex, Image, Text, AspectRatio, Link, Img } from "@chakra-ui/react";


 const TopNavbar = () => {

    return (
     <div>
        <Img style={{"width":"100%","margin":"0px"}} src="https://awesomescreenshot.s3.amazonaws.com/image/2796027/31810612-429722be01b1586c1125801e2f96e0fe.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20220828%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220828T065801Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=b832d20a2e1fdacc7ab2cd5497287754dd2149cbf41f3c16c78c6b76d3ddf461" />
     </div>
          
    )

}
export default TopNavbar

