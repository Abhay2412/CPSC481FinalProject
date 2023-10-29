import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import BusWelcomeLogo from '../assets/images/BusWelcomeLogo.svg'
import '../styles/Welcome.css'
const WelcomeScreen = ({setPageTitle}) => {

    useEffect(() => {
        setPageTitle()
    },[])

    return (
        <div>
            <h1 className="welcome-heading">WELCOME</h1>
            <Button variant="success" className='get-started-button'>Get Started</Button>
            <div className="image-container">
                <img src={BusWelcomeLogo} className="welcome-image" alt="Bus and People"  />
            </div>
        </div>
    )
};


export default WelcomeScreen