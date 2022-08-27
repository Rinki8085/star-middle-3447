import React from 'react'
import { Link as RouteLink} from "react-router-dom";
import { 
  Flex,
  Box,
  Spacer,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
 const Navbar = () => {

    return (
      <div style={{'backgroundColor':"skyblue","height":"45px"}}>
        {/* <Link to="/">Home</Link>
        <Link to="/livescore">Live Score</Link>
        <Link to="/Series">Series</Link>
        <Link to="/Teams">Teams</Link>
        <Link to="/News">News</Link>
        <Link to="/Features">Features</Link>
        <Link to="/">Videos</Link>
        <Link to="/">Stats</Link> */}
         <Flex width='70%' margin='auto' >

        <Box fontFamily="Roboto" className="dropdown">
            <RouteLink to={"/"} ><Box className="dropbtn">ESPNcricinfo </Box></RouteLink>
            {/* <Box className="dropdown-content" > </Box> */}
        </Box>
        <Spacer/>  
{/* 2      */}
    <Box className="dropdown">
      <RouteLink to={"/livescore"} > <Box fontFamily="Roboto" className="dropbtn">Live Score</Box></RouteLink>
    <Box className="dropdown-content" marginLeft='-60px' > 

        <Box width='200px' >

            <Box  width='800px'  >    

                <Flex>
                <VStack 
                fontFamily="Roboto" 
                display='flex' flexDirection='column' 
                justifyContent='start' 
                alignItems='flex-start' 
                ml='20px' 
                lineHeight='19px' 
                gap='0px'

                >
                    <Text>Live Score</Text>
                   <Text>Week View</Text>
                   <Text>Month View</Text>
                   <Text>Season View</Text>
                   <Text>International Calender</Text>
                   <Text>Desktop Scoreboard</Text>
                </VStack>
                <Spacer/>
                </Flex>
                </Box>
                </Box>
                </Box>
                </Box>
    <Box className="dropdown">
    <RouteLink to={"/Series"} > <Box fontFamily="Roboto" className="dropbtn">Series</Box></RouteLink>
    <Box className="dropdown-content" marginLeft='-60px' > 

        <Box width='1200px' >

            <Box  width='800px'  >    

                <Flex>
                <VStack 
                fontFamily="Roboto" 
                display='flex' flexDirection='column' 
                justifyContent='start' 
                alignItems='flex-start' 
                ml='20px' 
                lineHeight='19px' 
                gap='0px'
                >
                   <Text>Asian Cup</Text>
                   <Text>NZ-A in India</Text>
                   <Text>Austrlia v Zimbambe</Text>
                   <Text>The Hundreds (W)</Text>
                   <Text>Country Div2</Text>
                   <Text>Test champion</Text>
                   <Text>CWC Super League</Text>
                   <Text>-Archives-</Text>
                </VStack>
                <Spacer/>
                <VStack 
                fontFamily="Roboto" 
                display='flex' flexDirection='column' 
                justifyContent='start' 
                alignItems='flex-start' 
                ml='20px' 
                lineHeight='19px' 
                gap='0px'
                >
                  <Text>Asia Cup QLF</Text>
                  <Text>England v South Africa</Text>
                  <Text>The Hundred (M)</Text>
                  <Text>Country Div1</Text>
                  <Text>Maharaja T20</Text>
                  <Text>6IXTY (M)</Text>
                  <Text>Women's Championship</Text>
                  <Text>-Future Series-</Text>
                </VStack>
                <Spacer/>
                </Flex>
                </Box>
                </Box>
                </Box>
                </Box>
    <Box className="dropdown">
    <RouteLink to={"/Teams"} > <Box fontFamily="Roboto" className="dropbtn">Teams</Box></RouteLink>
    <Box className="dropdown-content" marginLeft='-60px' > 

        <Box width='1200px' >

            <Box  width='800px'  >    

                <Flex>
                <VStack 
                fontFamily="Roboto" 
                display='flex' flexDirection='column' 
                justifyContent='start' 
                alignItems='flex-start' 
                ml='20px' 
                lineHeight='19px' 
                gap='0px'

                >
                  <Text>Australia</Text>
                   <Text>Bangladesh</Text>
                   <Text>England</Text>
                   <Text>India</Text>
                   <Text>New Zealand</Text>
                   <Text>Pakistan</Text>
                   <Text>South Africa</Text>
                   <Text>Sri Lanka</Text>
                   <Text>West Indies</Text>
                   <Text>Zimbabwe</Text>
                </VStack>
                <Spacer/>
                <VStack 
                fontFamily="Roboto" 
                display='flex' flexDirection='column' 
                justifyContent='start' 
                alignItems='flex-start' 
                ml='20px' 
                lineHeight='19px' 
                gap='0px'

                >
                  <Text>Afghanistan</Text>
                  <Text>Ireland</Text>
                  <Text>Namibia</Text>
                  <Text>Nepal</Text>
                  <Text>Netherland</Text>
                  <Text>OMAN</Text>
                  <Text>PNG</Text>
                  <Text>Scotland</Text>
                  <Text>UAE</Text>
                  <Text>USA</Text>

                </VStack>
                </Flex>
                </Box>
                </Box>
                </Box>
                </Box>
    <Box className="dropdown">
    <RouteLink to={"/News"} > <Box fontFamily="Roboto" className="dropbtn">News</Box></RouteLink>
    <Box className="dropdown-content" marginLeft='-60px' > 

        <Box width='1200px' >

            <Box  width='800px'  >    

                <Flex>
                <VStack 
                fontFamily="Roboto" 
                display='flex' flexDirection='column' 
                justifyContent='start' 
                alignItems='flex-start' 
                ml='20px' 
                lineHeight='19px' 
                gap='0px'

                >
                    <Text>News Home</Text>
                   <Text>Future of ODI</Text>
                   <Text>Ball-temparring</Text>
                   <Text>Technology in cricket</Text>
                   <Text>Racism</Text>
                </VStack>
                <Spacer/>
                </Flex>
                </Box>
                </Box>
                </Box>
                </Box>
    <Box className="dropdown">
    <RouteLink to={"/Features"} > <Box fontFamily="Roboto" className="dropbtn">Features</Box></RouteLink>
    <Box className="dropdown-content" marginLeft='-60px' > 

        <Box width='1200px' >

            <Box  width='800px'  >    

                <Flex>
                <VStack 
                fontFamily="Roboto" 
                display='flex' flexDirection='column' 
                justifyContent='start' 
                alignItems='flex-start' 
                ml='20px' 
                lineHeight='19px' 
                gap='0px'

                >
                    <Text>Features Home</Text>
                   <Text>Writers</Text>
                   <Text>Photo Galleries</Text>
                   <Text>The cricket Monthly</Text>
                </VStack>
                <Spacer/>
                </Flex>
                </Box>
                </Box>
                </Box>
                </Box>
    <Box className="dropdown">
    <RouteLink to={"/Videos"} > <Box fontFamily="Roboto" className="dropbtn">Videos</Box></RouteLink>
    <Box className="dropdown-content" marginLeft='-60px' > 

        <Box width='1200px' >

            <Box  width='800px'  >    

                <Flex>
                <VStack 
                fontFamily="Roboto" 
                display='flex' flexDirection='column' 
                justifyContent='start' 
                alignItems='flex-start' 
                ml='20px' 
                lineHeight='19px' 
                gap='0px'

                >
                    <Text>Videos Home</Text>
                    <Text>T20 Time Out Hindi</Text>
                    <Text>Match day</Text>
                    <Text>Fantastic Picks</Text>
                    <Text>Run Order</Text>
                    <Text>25 Question</Text>
                    <Text>Interviews</Text>
                    <Text>Press Conference</Text>
                </VStack>
                <Spacer/>
                <VStack 
                fontFamily="Roboto" 
                display='flex' flexDirection='column' 
                justifyContent='start' 
                alignItems='flex-start' 
                ml='20px' 
                lineHeight='19px' 
                gap='0px'

                >
                    <Text>T20 Time Out</Text>
                    <Text>Hindi Videos</Text>
                    <Text>Haan Ya Naa</Text>
                    <Text>Polite Enquiries</Text>
                    <Text>Newsroom</Text>
                    <Text>News and Analysis</Text>
                    <Text>Features</Text>
                    <Text>Youtube</Text>
                </VStack>
                </Flex>
                </Box>
                </Box>
                </Box>
                </Box>
    <Box className="dropdown">
    <RouteLink to={"/Stats"} > <Box fontFamily="Roboto" className="dropbtn">Stats</Box></RouteLink>
    <Box className="dropdown-content" marginLeft='-60px' > 

        <Box width='1200px' >

            <Box  width='800px'  >    

                <Flex>
                <VStack 
                fontFamily="Roboto" 
                display='flex' flexDirection='column' 
                justifyContent='start' 
                alignItems='flex-start' 
                ml='20px' 
                lineHeight='19px' 
                gap='0px'
                >
                   <Text>Stats Home</Text>
                   <Text>Ipl 2022</Text>
                   <Text>SuperStats</Text>
                   <Text>All Records (W)</Text>
                   <Text>Grounds</Text>
                </VStack>
                <Spacer/>
                <VStack 
                fontFamily="Roboto" 
                display='flex' flexDirection='column' 
                justifyContent='start' 
                alignItems='flex-start' 
                ml='20px' 
                lineHeight='19px' 
                gap='0px'
                >
                  <Text>AskCricInfo</Text>
                  <Text>Statsguru</Text>
                  <Text>2022 Records</Text>
                  <Text>Players</Text>
                  <Text>Ranking</Text>
                </VStack>
                </Flex>
                </Box>
                </Box>
                </Box>
                </Box>   
    <Box fontFamily="Roboto" className="dropdown">
            <RouteLink to={"/"} ><Box className="dropbtn">Fantasy </Box></RouteLink>
            {/* <Box className="dropdown-content" > </Box> */}
        </Box>
        <Spacer/>
        <Box fontFamily="Roboto" className="dropdown">
            <RouteLink to={"/"} ><Box className="dropbtn">Edition In </Box></RouteLink>
            {/* <Box className="dropdown-content" > </Box> */}
        </Box>
        <Spacer/>
        <Box fontFamily="Roboto" className="dropdown">
            <RouteLink to={"/"} ><Box className="dropbtn">ESPNcricinfo </Box></RouteLink>
            {/* <Box className="dropdown-content" > </Box> */}
        </Box>
        <Spacer/>                                 
                </Flex>
                
      </div>
    )

}
export default Navbar

