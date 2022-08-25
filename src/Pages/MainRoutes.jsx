import React from 'react';
import {Route, Routes} from 'react-router-dom';
import CountryTeam from './Teams/CountryTeam';
import Teams from './Teams/Teams';
import Series from '../Component/Series';
import Future from '../Component/Future';
import Recently from '../Component/Recently';

const MainRoutes = ()=>{
   return(
      <Routes>
         <Route path='/Teams' element={<Teams/>} />
         <Route path='/Teams/:name' element={<CountryTeam/>} />
         <Route path="/Series" element={<Series/>}/>
         <Route path="/Future_matches"  element={<Future/>}/>
         <Route path="/recently" element={<Recently/> }/>
      </Routes>
   )
}

export default MainRoutes;
