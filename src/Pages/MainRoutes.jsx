import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Future from '../Component/Future';
import Recently from '../Component/Recently';
import Series from '../Component/Series';
import LiveScore from './Live_Scores/LiveScore';
import CountryTeam from './Teams/CountryTeam';
import Teams from './Teams/teams';

const MainRoutes = ()=>{
   return(
      <Routes>
         <Route path='/Teams' element={<Teams/>} />
         <Route path='/Teams/:name' element={<CountryTeam/>} />
         <Route path='/livescore' element={<LiveScore/>} />
         <Route path="/Series" element={<Series/>}/>
         <Route path="/Future_matches"  element={<Future/>}/>
         <Route path="recently" element={<Recently/> }/>
      </Routes>
   )
}

export default MainRoutes;
