import React from 'react';
import {Route, Routes} from 'react-router-dom';
import CountryTeam from './Teams/CountryTeam';
import Teams from './Teams/teams';

const MainRoutes = ()=>{
   return(
      <Routes>
         <Route path='/Teams' element={<Teams/>} />
         <Route path='/Teams/:name' element={<CountryTeam/>} />
      </Routes>
   )
}

export default MainRoutes;
