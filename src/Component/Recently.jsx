import React from "react";
import {Link} from "react-router-dom"
import { Heading, Box, Text } from "@chakra-ui/react";
import { ArrowDownIcon} from '@chakra-ui/icons'
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
        
          <Text fontSize="md"><Link to="/Series">Current Cricket</Link></Text>
          <div className={styles.vertical}></div>
          <Text fontSize="md" > <Link to="/future_matches">Future Series / Tournaments</Link> </Text>
          <div className={styles.vertical}></div>
          <Text fontSize="md">Recently Concluded</Text>
        </Box>
        {/* <hr style={{ backgroundColor: "black" , width:"auto"}}  /> */}
        <Box className={styles.content}>
          <Box>
            <Text fontSize="lg" fontWeight="bold" style={{marginBottom:"15px"}}>INTERNATIONAL TOURS</Text>
            <div style={{lineHeight:"30px"}}>
            <h5>NZ-A in India, Sep 2022</h5>
            <h5>India Women tour of England, Sep 2022</h5>
            <h5>New Zealand tour of Australia, Sep 2022</h5>
            <h5>England tour of Pakistan, Sep 2022</h5>
            <h5>Australia tour of India, Sep 2022</h5>
            <h5>South Africa tour of India, Sep 2022</h5>
            <h5>New Zealand T20I Tri-Series, Oct 2022</h5>
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

export default Recently;
