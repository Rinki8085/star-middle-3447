import React, {useEffect} from 'react';
import Blogs from './Blogs';
import FixtureResult from './FixtureResult';
import RightSideBar from './RightSideBar';
import {useDispatch, useSelector} from 'react-redux';
import {getInternationalTeamData, getWomenTeamData, getIplTeamData} from '../../Redux/action';
import {useParams} from 'react-router-dom';

const CountryTeam = ()=>{
   const internationalTeam = useSelector((state)=>state.internationalTeam);
   const womenTeam = useSelector((state)=>state.womensTeam);
   const iplTeam = useSelector((state)=>state.iplTeam);
   const dispatch = useDispatch();  
   const {name} = useParams();

   let data = [];

   if(internationalTeam.filter((item)=>{return item.name === name}).length!==0){
      data = internationalTeam.filter((item)=>{return item.name === name})
   }else if(womenTeam.filter((item)=>{return item.name === name}).length!==0){
      data = womenTeam.filter((item)=>{return item.name === name});
   }else{
      data = iplTeam.filter((item)=>{return item.name === item })
   }

   useEffect(()=>{   
      dispatch(getInternationalTeamData());
      dispatch(getWomenTeamData());
      dispatch(getIplTeamData());
   },[])

   return(
      <div>
         <div style={{border:"1px solid black"}}>
            <div style={{display:"flex",padding:"18px"}}>
               <div style={{display:"flex",flexDirection:'row',gap:'10px',marginRight:'20px'}}>
                  <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/321000/321005.png" width='20px' height='20px' />
                  <span style={{fontWeight:"bold",color:"rgba(43,44,45)"}}>Afghanistan</span>
               </div>
               <div style={{display:"flex",flexDirection:"row",gap:'20px',paddingLeft:"20px",color:"#48494A"}}>
                  <div style={{fontWeight:"bold"}}>Home</div>
                  <div>Fixtures and Results</div>
                  <div>Players</div>
                  <div>Stats</div>
                  <div>Videos</div>
                  <div>Squads</div>
                  <div>Galleries</div>
                  <div>Photos</div>
               </div>
            </div>
         </div>
         <div>
            <div style={{padding:"10px",textAlign :"center"}}>
               <img src='https://tpc.googlesyndication.com/simgad/10994949654465411539?' alt="imageOf Cricket"/>
            </div>
         </div>
         <div style={{display:"flex",padding:'20px',gap:"20px"}}>
           {data.map((item)=>
            <>
               <FixtureResult details={item.details}  />
               <Blogs/>
               <RightSideBar/>
            </>
           )}
         </div>
      </div>
   )
}

export default CountryTeam;
