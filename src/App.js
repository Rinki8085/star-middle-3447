
import {Routes, Route} from "react-router-dom"
import Future from './Component/Future';
import Recently from "./Component/Recently";
import Series from './Component/Series';


import "./App.css";
import {useSelector} from 'react-redux';
//import Teams from './Pages/Teams/teams';
import MainRoutes from './Pages/MainRoutes'



function App() {

  return (

    // <div >
    //     <Routes>
    //       <Route path="/Series" element={<Series/>}/>
    //       <Route path="/Future_matches"  element={<Future/>}/>
    //       <Route path="recently" element={<Recently/> }/>
    //     </Routes>
        
        
      

    <div className="App">

      <MainRoutes/>


    </div>
  );
}

export default App;
