import React from 'react';
import styled from 'styled-components';

const Blogs = ()=>{
   return(
      <BlogWrapper>
         <div>
            <div style={{marginBottom:"0.5rem"}}>
               <img src="https://tpc.googlesyndication.com/simgad/13223353124932635371?" />
            </div>
            <div>
               <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/272700/272724.6.jpg" width="615px" height="343px" />
            </div>
         </div>
      </BlogWrapper>
   )
}

export default Blogs;

const BlogWrapper = styled.div`
   width:615px;
   border:1px solid black
`

// const CardWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;
