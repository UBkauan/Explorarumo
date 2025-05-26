import './App.css';
import NavMenu from './components/menu/Menu'
import Banner from './components/banner/Banner'
import SecBanner from './components/sec-banner/SecBanner';
import Baseboard from './components/baseboard/Baseboard';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
      <NavMenu />
      <Banner />
      <SecBanner />
      <Baseboard />
      <Outlet />
    </div>

  );
}

export default App;
