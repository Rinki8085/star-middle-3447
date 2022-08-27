import React from 'react';
import {Route, Routes} from 'react-router-dom';
import CountryTeam from './Teams/CountryTeam';
import Teams from './Teams/teams';
import Series from '../Component/Series';
import Future from '../Component/Future';
import Recently from '../Component/Recently';
import LiveScore from "./Live_Scores/LiveScore";
import TopNavbar from "../Component/HomePage/TopNavbar/TopNavbar"
import Navbar from '../Component/HomePage/Navbar/navbar';
import Homepage from '../Component/HomePage/Homepage';
import Footermain from '../Component/HomePage/Footermain/footermain';

import TopNavbar from "../Component/HomePage/TopNavbar/TopNavbar"
import Navbar from '../Component/HomePage/Navbar/navbar';
import Homepage from '../Component/HomePage/Homepage';
import Footermain from '../Component/HomePage/Footermain/footermain';

const MainRoutes = ()=>{
   return(
      <Routes>
         <Route path='/' element={<><Homepage/></>}/>
         <Route path='/Teams' element={<Teams/>} />
         <Route path='/Teams/:name' element={<CountryTeam/>} />
         <Route path="/Series" element={<Series/>}/>
         <Route path="/Future_matches"  element={<Future/>}/>
         <Route path="/recently" element={<Recently/> }/>
         <Route path="/livescore" element={<LiveScore />} />
      </Routes>
   )
}
export default MainRoutes;
