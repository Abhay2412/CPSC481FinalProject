import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './screens/Home';
import CityOfCalgary from "./assets/images/CityOfCalgary.svg"
import WelcomeScreen from './screens/Welcome';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import DashboardScreen from './screens/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SelectTicketsScreen from './screens/SelectTickets';
import MakePaymentScreen from './screens/MakePayment';
import SuccessfulPurchaseScreen from './screens/successfulPurchaseScreen';
import RouteInformation from './screens/routeInformation';
import MoreInfo from './screens/moreInfo';
import RefundScreen from './screens/refund';
import RefundConfirmation from './screens/refundConfirmation';
import HelpModal from './components/HelpModal';
import HomeButton from './components/HomeButton';
export const TicketCountContext = React.createContext();

function App() {
  const [ticketCounts, setTicketCounts] = React.useState({ Senior: 0, Adult: 0, Youth: 0, Child: 0 });
  const [pageTitle, setPageTitle] = useState("");
  
  const handleEnglishSwitch = () => {
    alert('All pages need to be translated to English')
  }

  const handleFrenchSwitch = () => {
    alert ('All pages need to be translated to French')
  }

  return (
    <Router>
      <div className='parent-container'>
        <div className="svg-container">
          <img className='svg-left' src={CityOfCalgary} alt='City Of Calgary'/> 
          <div>{pageTitle}</div>
          <div className='svg-right'>
            <HomeButton/>
            <Button onClick={handleEnglishSwitch} className='navbar-buttons'>EN</Button>
            <Button onClick={handleFrenchSwitch} className='navbar-buttons'>FR</Button>
            <HelpModal/>
          </div>
        </div>
        
        <TicketCountContext.Provider value={{ ticketCounts, setTicketCounts }}>
          <Routes>
            <Route path="/" element={<HomeScreen><WelcomeScreen setPageTitle={setPageTitle} /></HomeScreen>} />
            <Route path="/dashboard" element={<DashboardScreen setPageTitle={setPageTitle} />} />
            <Route path="/tickets" element={<SelectTicketsScreen setPageTitle={setPageTitle} />} />
            <Route path="/payment" element={<MakePaymentScreen setPageTitle={setPageTitle} />} />
            <Route path='/paymentSuccessful' element={<SuccessfulPurchaseScreen setPageTitle={setPageTitle}/>}/>
            <Route path='/routeInformation' element={<RouteInformation setPageTitle={setPageTitle}/>}/>
            <Route path='/moreInfo' element={<MoreInfo setPageTitle={setPageTitle}/>}/>
            <Route path='/refund' element={<RefundScreen setPageTitle={setPageTitle}/>}/>
            <Route path='/refundConfirmation' element={<RefundConfirmation setPageTitle={setPageTitle}/>}/>
          </Routes>
        </TicketCountContext.Provider>
      </div>
    </Router>
  );
}

export default App;