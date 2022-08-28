import React from 'react'
import styled from 'styled-components'
import styles from "./Single_match_blog"
const Single_match_blog = ({details}) => {
  return (
    <div style={{backgroundColor:"whitesmoke"}}>
        <img src='https://tpc.googlesyndication.com/simgad/11321537340682502286?' style={{margin:"110px"}} />
        <div style={{display:"flex" ,gap:"30px", margin:"30px" }}>
            <div className={styles.left} style={{display:"flex", gap:"20px", width:"20%", border:"solid" ,boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}> 
                <div>Fixtures</div>
                <div>Results</div>
                <br />
                
            </div>
            
            <div className={styles.right}>
                 fdv fcewfcew
            </div>
            <div>
                 v df f,lkmklmlkm552
            </div>
        </div>
   
    </div>
  )
}

export default Single_match_blog
const FixtureResultWrapper = styled.div`
   width:264px;
   padding:15px;
   border-radius:5px;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`