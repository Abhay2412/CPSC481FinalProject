import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './screens/Home';
import CityOfCalgary from "./assets/images/CityOfCalgary.svg"
import WelcomeScreen from './screens/Welcome';
import EnglishLanguageLogo from './assets/images/EnglishCanadaLogo.svg';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import FrenchLogo from './assets/images/FrenchLogo.svg';


function App() {

  const [pageTitle, setPageTitle] = useState("");
  const handleEnglishSwitch = () => {
    alert('All pages need to be translated to English')
  }
  const handleFrenchSwitch = () => {
    alert ('All pages need to be translated to French')
  }
  return (
    <div className='parent-container'>
      <div className="svg-container">
          {/* <CityOfCalgary/> */}
          {/* <div style={{alignItems: "end",justifyContent: "flex-end"}}> */}
            <img className='svg-left' src={CityOfCalgary} alt='City Of Calgary'/> 
            <div>{pageTitle}</div>
            <div className='svg-right'>
            <Button onClick={handleEnglishSwitch}>EN</Button>
            <Button onClick={handleFrenchSwitch}>FR</Button>
            <Button variant="outline-danger">Help</Button>
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
