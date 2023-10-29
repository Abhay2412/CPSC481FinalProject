import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './screens/Home';
import CityOfCalgary from "./assets/images/CityOfCalgary.svg"
import WelcomeScreen from './screens/welcome';
import EnglishLanguageLogo from './assets/images/EnglishCanadaLogo.svg';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import FrenchLogo from './assets/images/FrenchLogo.svg';


function App() {

  const [pageTitle, setPageTitle] = useState("");

  return (
    <div className='parent-container'>
      <div className="svg-container">
          {/* <CityOfCalgary/> */}
          {/* <div style={{alignItems: "end",justifyContent: "flex-end"}}> */}
            <img className='svg-left' src={CityOfCalgary} alt='City Of Calgary'/> 
            <div>{pageTitle}</div>
            <div className='svg-right' style={{display: "flex", alignContent: "center"}}>
              <img className='' src={EnglishLanguageLogo} alt='Switch Language to English' title="English"/>
              <img className='' src={FrenchLogo} alt='Switch Language to French' title='French' />
              <Button>Help</Button>
            </div>
            
          {/* </div> */}
      </div>
      <HomeScreen style={{display: "flex", alignItems: "center"}}>
      <WelcomeScreen setPageTitle={setPageTitle} />
    </HomeScreen>
  </div>
  );
}

export default App;
