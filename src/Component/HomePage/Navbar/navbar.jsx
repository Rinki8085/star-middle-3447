import React from 'react'
import { Link as RouteLink } from 'react-router-dom';
import { Box, Flex, Image, Text, AspectRatio, Link, Img } from "@chakra-ui/react";




 const Navbar = () => {

    return (
      <div style={{'backgroundColor':"skyblue","height":"45px"}}>
         <RouteLink to="/">Home</RouteLink>
        <RouteLink to="/livescore">Live Score</RouteLink>
        <RouteLink to="/Series">Series</RouteLink>
        <RouteLink to="/Teams">Teams</RouteLink>
        <RouteLink to="/News">News</RouteLink>
        <RouteLink to="/Features">Features</RouteLink>
        <RouteLink to="/">Videos</RouteLink>
        <RouteLink to="/">Stats</RouteLink> 
      </div>
//          <Flex width='70%' margin='auto' >

//         <Box fontFamily="Roboto" className="dropdown">
//             <RouteRouteLink to={"/"} ><Box className="dropbtn"><Img src="https://wassets.hscicdn.com/static/images/logo.png"/></Box></RouteRouteLink>
//             {/* <Box className="dropdown-content" > </Box> */}
//         </Box>
//         <Spacer/>  
// {/* 2      */}
//     <Box className="dropdown">
//       <RouteRouteLink to={"/livescore"} > <Box fontFamily="Roboto" className="dropbtn">Live Score</Box></RouteRouteLink>
//     <Box className="dropdown-content" marginLeft='-60px' > 

//         <Box width='1000px' >

//             <Box  width='800px'  >    

//                 <Flex>
//                 <VStack 
//                 fontFamily="Roboto" 
//                 display='flex' flexDirection='column' 
//                 justifyContent='start' 
//                 alignItems='flex-start' 
//                 ml='20px' 
//                 lineHeight='19px' 
//                 gap='0px'

//                 >
//                     <Text>Live Score</Text>
//                    <Text>Week View</Text>
//                    <Text>Month View</Text>
//                    <Text>Season View</Text>
//                    <Text>International Calender</Text>
//                    <Text>Desktop Scoreboard</Text>
//                 </VStack>
//                 <Spacer/>
//                 </Flex>
//                 </Box>
//                 </Box>
//                 </Box>
//                 </Box>
//     <Box className="dropdown">
//     <RouteRouteLink to={"/Series"} > <Box fontFamily="Roboto" className="dropbtn">Series</Box></RouteRouteLink>
//     <Box className="dropdown-content" marginLeft='-60px' > 

//         <Box width='1200px' >

//             <Box  width='800px'  >    

//                 <Flex>
//                 <VStack 
//                 fontFamily="Roboto" 
//                 display='flex' flexDirection='column' 
//                 justifyContent='start' 
//                 alignItems='flex-start' 
//                 ml='20px' 
//                 lineHeight='19px' 
//                 gap='0px'
//                 >
//                    <Text>Asian Cup</Text>
//                    <Text>NZ-A in India</Text>
//                    <Text>Austrlia v Zimbambe</Text>
//                    <Text>The Hundreds (W)</Text>
//                    <Text>Country Div2</Text>
//                    <Text>Test champion</Text>
//                    <Text>CWC Super League</Text>
//                    <Text>-Archives-</Text>
//                 </VStack>
//                 <Spacer/>
//                 <VStack 
//                 fontFamily="Roboto" 
//                 display='flex' flexDirection='column' 
//                 justifyContent='start' 
//                 alignItems='flex-start' 
//                 ml='20px' 
//                 lineHeight='19px' 
//                 gap='0px'
//                 >
//                   <Text>Asia Cup QLF</Text>
//                   <Text>England v South Africa</Text>
//                   <Text>The Hundred (M)</Text>
//                   <Text>Country Div1</Text>
//                   <Text>Maharaja T20</Text>
//                   <Text>6IXTY (M)</Text>
//                   <Text>Women's Championship</Text>
//                   <Text>-Future Series-</Text>
//                 </VStack>
//                 <Spacer/>
//                 </Flex>
//                 </Box>
//                 </Box>
//                 </Box>
//                 </Box>
//     <Box className="dropdown">
//     <RouteRouteLink to={"/Teams"} > <Box fontFamily="Roboto" className="dropbtn">Teams</Box></RouteRouteLink>
//     <Box className="dropdown-content" marginLeft='-60px' > 

//         <Box width='1200px' >

//             <Box  width='800px'  >    

//                 <Flex>
//                 <VStack 
//                 fontFamily="Roboto" 
//                 display='flex' flexDirection='column' 
//                 justifyContent='start' 
//                 alignItems='flex-start' 
//                 ml='20px' 
//                 lineHeight='19px' 
//                 gap='0px'

//                 >
//                   <Text>Australia</Text>
//                    <Text>Bangladesh</Text>
//                    <Text>England</Text>
//                    <Text>India</Text>
//                    <Text>New Zealand</Text>
//                    <Text>Pakistan</Text>
//                    <Text>South Africa</Text>
//                    <Text>Sri Lanka</Text>
//                    <Text>West Indies</Text>
//                    <Text>Zimbabwe</Text>
//                 </VStack>
//                 <Spacer/>
//                 <VStack 
//                 fontFamily="Roboto" 
//                 display='flex' flexDirection='column' 
//                 justifyContent='start' 
//                 alignItems='flex-start' 
//                 ml='20px' 
//                 lineHeight='19px' 
//                 gap='0px'

//                 >
//                   <Text>Afghanistan</Text>
//                   <Text>Ireland</Text>
//                   <Text>Namibia</Text>
//                   <Text>Nepal</Text>
//                   <Text>Netherland</Text>
//                   <Text>OMAN</Text>
//                   <Text>PNG</Text>
//                   <Text>Scotland</Text>
//                   <Text>UAE</Text>
//                   <Text>USA</Text>

//                 </VStack>
//                 </Flex>
//                 </Box>
//                 </Box>
//                 </Box>
//                 </Box>
//     <Box className="dropdown">
//     <RouteRouteLink to={"/News"} > <Box fontFamily="Roboto" className="dropbtn">News</Box></RouteRouteLink>
//     <Box className="dropdown-content" marginLeft='-60px' > 

//         <Box width='1200px' >

//             <Box  width='800px'  >    

//                 <Flex>
//                 <VStack 
//                 fontFamily="Roboto" 
//                 display='flex' flexDirection='column' 
//                 justifyContent='start' 
//                 alignItems='flex-start' 
//                 ml='20px' 
//                 lineHeight='19px' 
//                 gap='0px'

//                 >
//                     <Text>News Home</Text>
//                    <Text>Future of ODI</Text>
//                    <Text>Ball-temparring</Text>
//                    <Text>Technology in cricket</Text>
//                    <Text>Racism</Text>
//                 </VStack>
//                 <Spacer/>
//                 </Flex>
//                 </Box>
//                 </Box>
//                 </Box>
//                 </Box>
//     <Box className="dropdown">
//     <RouteRouteLink to={"/Features"} > <Box fontFamily="Roboto" className="dropbtn">Features</Box></RouteRouteLink>
//     <Box className="dropdown-content" marginLeft='-60px' > 

//         <Box width='1200px' >

//             <Box  width='800px'  >    

//                 <Flex>
//                 <VStack 
//                 fontFamily="Roboto" 
//                 display='flex' flexDirection='column' 
//                 justifyContent='start' 
//                 alignItems='flex-start' 
//                 ml='20px' 
//                 lineHeight='19px' 
//                 gap='0px'

//                 >
//                     <Text>Features Home</Text>
//                    <Text>Writers</Text>
//                    <Text>Photo Galleries</Text>
//                    <Text>The cricket Monthly</Text>
//                 </VStack>
//                 <Spacer/>
//                 </Flex>
//                 </Box>
//                 </Box>
//                 </Box>
//                 </Box>
//     <Box className="dropdown">
//     <RouteRouteLink to={"/Videos"} > <Box fontFamily="Roboto" className="dropbtn">Videos</Box></RouteRouteLink>
//     <Box className="dropdown-content" marginLeft='-60px' > 

//         <Box width='1200px' >

//             <Box  width='800px'  >    

//                 <Flex>
//                 <VStack 
//                 fontFamily="Roboto" 
//                 display='flex' flexDirection='column' 
//                 justifyContent='start' 
//                 alignItems='flex-start' 
//                 ml='20px' 
//                 lineHeight='19px' 
//                 gap='0px'

//                 >
//                     <Text>Videos Home</Text>
//                     <Text>T20 Time Out Hindi</Text>
//                     <Text>Match day</Text>
//                     <Text>Fantastic Picks</Text>
//                     <Text>Run Order</Text>
//                     <Text>25 Question</Text>
//                     <Text>Interviews</Text>
//                     <Text>Press Conference</Text>
//                 </VStack>
//                 <Spacer/>
//                 <VStack 
//                 fontFamily="Roboto" 
//                 display='flex' flexDirection='column' 
//                 justifyContent='start' 
//                 alignItems='flex-start' 
//                 ml='20px' 
//                 lineHeight='19px' 
//                 gap='0px'

//                 >
//                     <Text>T20 Time Out</Text>
//                     <Text>Hindi Videos</Text>
//                     <Text>Haan Ya Naa</Text>
//                     <Text>Polite Enquiries</Text>
//                     <Text>Newsroom</Text>
//                     <Text>News and Analysis</Text>
//                     <Text>Features</Text>
//                     <Text>Youtube</Text>
//                 </VStack>
//                 </Flex>
//                 </Box>
//                 </Box>
//                 </Box>
//                 </Box>
//     <Box className="dropdown">
//     <RouteRouteLink to={"/Stats"} > <Box fontFamily="Roboto" className="dropbtn">Stats</Box></RouteRouteLink>
//     <Box className="dropdown-content" marginLeft='-60px' > 

//         <Box width='1200px' >

//             <Box  width='800px'  >    

//                 <Flex>
//                 <VStack 
//                 fontFamily="Roboto" 
//                 display='flex' flexDirection='column' 
//                 justifyContent='start' 
//                 alignItems='flex-start' 
//                 ml='20px' 
//                 lineHeight='19px' 
//                 gap='0px'
//                 >
//                    <Text>Stats Home</Text>
//                    <Text>Ipl 2022</Text>
//                    <Text>SuperStats</Text>
//                    <Text>All Records (W)</Text>
//                    <Text>Grounds</Text>
//                 </VStack>
//                 <Spacer/>
//                 <VStack 
//                 fontFamily="Roboto" 
//                 display='flex' flexDirection='column' 
//                 justifyContent='start' 
//                 alignItems='flex-start' 
//                 ml='20px' 
//                 lineHeight='19px' 
//                 gap='0px'
//                 >
//                   <Text>AskCricInfo</Text>
//                   <Text>Statsguru</Text>
//                   <Text>2022 Records</Text>
//                   <Text>Players</Text>
//                   <Text>Ranking</Text>
//                 </VStack>
//                 </Flex>
//                 </Box>
//                 </Box>
//                 </Box>
//                 </Box>   
//     <Box fontFamily="Roboto" className="dropdown">
//             <RouteRouteLink to={"/"} ><Box className="dropbtn">Fantasy </Box></RouteRouteLink>
//             {/* <Box className="dropdown-content" > </Box> */}
//         </Box>
//         <Spacer/>
//         <Box fontFamily="Roboto" className="dropdown">
//             <RouteRouteLink to={"/"} ><Box className="dropbtn">Edition In </Box></RouteRouteLink>
//             {/* <Box className="dropdown-content" > </Box> */}
//         </Box>
//         <Spacer/>
//         <Box fontFamily="Roboto" className="dropdown">
//             <RouteRouteLink to={"/"} ><Box className="dropbtn">ESPNcricinfo </Box></RouteRouteLink>
//             {/* <Box className="dropdown-content" > </Box> */}
//         </Box>
//         <Spacer/>                                 
//                 </Flex>
                
//       </div>
    

    )

}
export default Navbar

