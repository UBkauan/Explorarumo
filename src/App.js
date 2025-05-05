import './App.css';
import NavMenu from './components/menu/Menu'
import Banner from './components/banner/Banner'
import SecBanner from './components/sec-banner/SecBanner';
import Baseboard from './components/baseboard/Baseboard';


function App() {
  return (
    <div>
      <NavMenu />
      <Banner />
      <SecBanner />
      <Baseboard />
    </div>

  );
}

export default App;
