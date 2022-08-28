import React from "react";
import styles from "./Series.module.css";
import {NavLink} from "react-router-dom"
import { Heading, Box, Text } from "@chakra-ui/react";


const Future = () => {
  return (
    <div>
      <Heading as="h2" size="md" noOfLines={1} className={styles.heading}>
        FIXTURES AND RESULTS
      </Heading>
      
      <Box className={styles.outerbox}>
      <img src="https://tpc.googlesyndication.com/daca_images/simgad/532420073875604930"  style={{paddingLeft:"125px" , paddingTop:"20px"}}/>
        
        <Box style={{marginLeft:"78%" , marginTop:"10px" , marginRight:"20px", }}>
            <img src="https://tpc.googlesyndication.com/simgad/2618765116939835931?"/>
            
        </Box>
        <Box className={styles.heading2}>
        
          <Text fontSize="md"><NavLink to="/Series" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'black' })}>Current Cricket</NavLink></Text>
          <div className={styles.vertical}></div>
          <Text fontSize="md" > <NavLink to="/future_matches">Future Series / Tournaments</NavLink> </Text>
          <div className={styles.vertical}></div>
          <Text fontSize="md"><NavLink to="/recently" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'black' })}>Recently Concluded</NavLink></Text>
        </Box>
        {/* <hr style={{ backgroundColor: "black" , width:"auto"}}  /> */}
        <Box className={styles.content}>
          <Box>
            <Text fontSize="lg" fontWeight="bold" style={{marginBottom:"15px"}}>INTERNATIONAL TOURS</Text>
            <div style={{lineHeight:"30px"}}>
            <h5>Zimbabwe v Bangladesh</h5>
            <h5>Ireland v Afghanistan</h5>
            <h5>West Indies v India</h5>
            <h5>Sri Lanka v Pakistan</h5>
            <h5>Netherlands v New Zealand</h5>
            <h5>SA-W in England</h5>
            <h5>Scotland v New Zealand</h5>
           
            <h5>West Indies tour of Australia, Oct 2022</h5>
            <h5>England tour of Australia, Oct 2022</h5>
            <h5>India tour of New Zealand, Nov 2022</h5>
            <h5>South Africa tour of Australia, Dec 2022</h5>
            <h5>Bangladesh Women tour of New Zealand, Dec 2022</h5>
            <h5>England tour of New Zealand, Feb 2023</h5>
            <h5>Sri Lanka tour of New Zealand, Mar 2023</h5>
            
            </div>

            <Text fontSize="lg" fontWeight="bold" style={{marginBottom:"15px" ,marginTop:"30px"}}>INTERNATIONAL TOURNAMENTS</Text>
            <div style={{lineHeight:"30px"}}>
            <h5>ICC Men's T20 World Cup</h5>
            
            
            </div>
            

            </Box>
            </Box>
        
      </Box>
    </div>
  );
};

export default Future;
