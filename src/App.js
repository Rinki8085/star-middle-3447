import logo from './logo.svg';
import {useSelector} from 'react-redux';
import MainRoutes from './Pages/MainRoutes'
import CountryTeam from './Pages/Teams/CountryTeam';

function App() {

  return (
    <div className="App">
      <MainRoutes/>
      {/* <CountryTeam/> */}
    </div>
  );
}

export default App;
