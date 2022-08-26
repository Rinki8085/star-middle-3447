import React from "react";
import {NavLink} from "react-router-dom"
import { Heading, Box, Text } from "@chakra-ui/react";
import { ArrowDownIcon} from '@chakra-ui/icons';
import styles from "./Series.module.css";
const Recently = () => {
  return (
    <div>
      <Heading as="h2" size="md" noOfLines={1} className={styles.heading}>
        FIXTURES AND RESULTS
      </Heading>
      
      <Box className={styles.outerbox}>
      
        
        <Box style={{marginLeft:"78%" , marginTop:"10px" , marginRight:"20px", }}>
            <img src="https://tpc.googlesyndication.com/simgad/2618765116939835931?"/>
            
        </Box>
        <Box className={styles.heading2}>
        
          <Text fontSize="md"><NavLink to="/Series" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'white' })}>Current Cricket</NavLink></Text>
          <div className={styles.vertical}></div>
          <Text fontSize="md" > <NavLink to="/future_matches" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'white' })}>Future Series / Tournaments</NavLink> </Text>
          <div className={styles.vertical}></div>
          <Text fontSize="md">Recently Concluded</Text>
        </Box>
        {/* <hr style={{ backgroundColor: "black" , width:"auto"}}  /> */}
        <Box className={styles.content}>
          <Box>
            <Text fontSize="lg" fontWeight="bold" style={{marginBottom:"15px"}}>INTERNATIONAL TOURS</Text>
            <div style={{lineHeight:"35px"}}>
            <h5>Zimbabwe v Bangladesh</h5>
            
            <h5>Ireland v Afghanistan</h5>
            <h5>West Indies v India</h5>
            <h5> Sri Lanka v Pakistan</h5>
            <h5> Netherlands v New Zealand</h5>
            <h5> SA-W in England</h5>
            <h5> Scotland v New Zealand</h5>
            <h5> IRE Tri-Series (Women)</h5>
            <h5> Ireland v New Zealand</h5>
            <h5>England v India</h5>
            <h5> West Indies v Bangladesh</h5>
            <h5> Sri Lanka v Australia</h5>
            <h5>IND-W in Sri Lanka</h5>
            <h5>Ireland v India</h5>
            <h5>England v India (5th Test)</h5>
            <h5> Netherlands v England</h5>
            <h5> England v New Zealand</h5>
            <h5> AUS-A in Sri Lanka</h5>
            <h5> India v South Africa</h5>
            
            </div>

            <Text fontSize="lg" fontWeight="bold" style={{marginBottom:"15px" ,marginTop:"30px"}}>ASSOCIATE CRICKET</Text>
            <div style={{lineHeight:"30px"}}>
            <h5>ICC Men's T20 World Cup</h5>
            <h5>Canada v Nepal</h5>
            <h5>Austria v Hungary</h5>
            <h5>Sofia T20</h5>
            <h5>Finland v Estonia</h5>
            <h5>Bulgaria v Serbia</h5>
            <h5>Namibia Tri-Series</h5>
            
            </div>
            

            </Box>
            </Box>
        
      </Box>
    </div>
  );
};

export default Recently;
