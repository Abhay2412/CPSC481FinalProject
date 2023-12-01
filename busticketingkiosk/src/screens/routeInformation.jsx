import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Dropdown, Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import "../styles/RouteInformation.css"
import Bus1 from "../assets/images/Bus1.svg";
import DisableIcon from "../assets/images/DisableIcon.svg";

const RouteInformation = () => {
    const navigate = useNavigate();
    const [routeNumber, setRouteNumber] = useState("");
    const [nextDeparture, setNextDeparture] = useState("");
    const [duration, setDuration] = useState("");
    const [selectedRoute, setSelectedRoute] = useState();
    const [numberOfStops, setNumberOfStops] = useState();
    const location = useLocation();
    const { t } = useTranslation();

    const routeData = {
        "Bowness": { routeNumber: "1", nextDeparture: "10:15 AM", duration: "30 minutes", numberOfStops: 20, lastDeparture: "11:15 PM"},
        "Mount Pleasant": { routeNumber: "2", nextDeparture: "10:30 AM", duration: "1 hour", numberOfStops: 70, lastDeparture: "11:30 PM"},
        "Sandstone": { routeNumber: "3", nextDeparture: "10:45 AM", duration: "2 hours", numberOfStops: 80, lastDeparture: "11:15 PM" },
        "Huntington": { routeNumber: "4", nextDeparture: "11:00 AM", duration: "2 hours 50 minutes", numberOfStops: 75, lastDeparture: "11:15 PM" },
        "Killarney": { routeNumber: "6", nextDeparture: "11:15 AM", duration: "35 minutes", numberOfStops: 34, lastDeparture: "11:10 PM" },
        "Marda Loop": { routeNumber: "7", nextDeparture: "11:30 AM", duration: "30 minutes", numberOfStops: 38, lastDeparture: "10:15 PM" },
        "North Pointe": { routeNumber: "8", nextDeparture: "11:45 AM", duration: "35 minutes", numberOfStops: 42, lastDeparture: "10:20 PM" },
        "Dalhousie": { routeNumber: "9", nextDeparture: "3:00 PM", duration: "10 minutes", numberOfStops: 5, lastDeparture: "11:10 PM" },
        "City Hall": { routeNumber: "10", nextDeparture: "12:15 PM", duration: "1 hour 23 minutes", numberOfStops: 47, lastDeparture: "11:25 PM" },
        "Castleridge": { routeNumber: "21", nextDeparture: "12:30 PM", duration: "30 minutes", numberOfStops: 30, lastDeparture: "11:45 PM" },
        "Monterey Park": { routeNumber: "57", nextDeparture: "12:45 PM", duration: "28 minutes", numberOfStops: 32, lastDeparture: "11:15 PM" },
        "Nolan Hill": { routeNumber: "82", nextDeparture: "1:00 PM", duration: "30 minutes" , numberOfStops: 35, lastDeparture: "11:00 PM"}
    };

    useEffect(() => {
        if(location.state?.selectedRoute && routeData[location.state.selectedRoute])
        {
            const {selectedRoute} = location.state;
            setSelectedRoute(selectedRoute);
            setRouteNumber(routeData[selectedRoute].routeNumber);
            setNextDeparture(routeData[selectedRoute].nextDeparture);
            setDuration(routeData[selectedRoute].duration);
            setNumberOfStops(routeData[selectedRoute].numberOfStops);
        }
    },[location.state?.selectedRoute])

    const handleRouteChange = (route) => { setSelectedRoute(route); setRouteNumber(routeData[route].routeNumber); setNextDeparture(routeData[route].nextDeparture); setDuration(routeData[route].duration); setNumberOfStops(routeData[route].numberOfStops) };
    return (
        <Container className="mt-5">
            <Row className="header-row">
                <Col>
                    <h1>{t('Route Information')}</h1>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={5}>
                    <div className="mb-5 d-flex align-items-center">
                    <span className="label-text-select-route" style={{marginRight: "10px"}}><b>{t('Select Route:')}</b></span>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {selectedRoute || "Select a Route"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {Object.keys(routeData).map(route => (
                                    <Dropdown.Item key={route} onClick={() => handleRouteChange(route)}>
                                        {route}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div style={{marginTop: "30px"}}>
                        <div className="mb-3 d-flex align-items-center">
                            <span className="label-text-select-route"><b>{t('Route Number:')}</b> {routeNumber}</span> 
                        </div>
                        <div className="mb-3 d-flex align-items-center">
                            <span className="label-text-select-route"><b>{t('Next Departure:')}</b> {nextDeparture}</span> 
                        </div>
                        <div className="mb-3 d-flex align-items-center">
                            <span className="label-text-select-route"><b>{t('Number of Stops:')}</b> {numberOfStops}</span> 
                        </div>
                        <div className="mb-3 d-flex align-items-center">
                            <span className="label-text-select-route"><b>{t('Duration: ')}</b> {duration}</span> 
                        </div>
                        <div className="mb-3 d-flex align-items-center">
                            <span className="label-text-select-route"><b>{t('Upcoming Bus Type: ')}</b> <img src={Bus1} alt="Bus Type 1" style={{height: 50}}/> <img src={DisableIcon} alt="Accessible Icon" style={{height: 30}} /></span> 
                        </div>
                        <div className="mb-3 d-flex align-items-center">
                            <span className="label-text-select-route" style={{ color: "orange"}}><i>{t('Buses offering accessibility are identified with this icon')}:</i> <img src={DisableIcon} alt="Accessible Icon" style={{height: 30}} /></span> 
                        </div>
                    </div>
                    
                    <div>
                        <Button className="button button-light-blue" disabled={!selectedRoute} block onClick={() => navigate('/detailedBusSchedule', {state: {selectedRoute, routeData: routeData[selectedRoute]}})}> View Bus Schedule </Button>
                    </div>
                </Col>
                <Col md={5}>
                    <div style={{fontFamily: "Ariel, sans-serif", fontWeight: "bold"}}>
                        {t('Route Map')}
                    </div>
                    <img src={`/RouteMapImages/${selectedRoute}.png`} alt={selectedRoute ? `${selectedRoute} Route Map` : "No route selected"}  width="600px" />
                </Col>
            </Row>
            <Row className="buttons-row">
                <Col>
                    <div className="buttons-group">
                        <Button className="button button-lightgrey" block onClick={() => navigate('/dashboard')}>{t('Dashboard')}</Button>
                        <Button className="button button-lightblue" block onClick={() => navigate('/tickets')}>{t('Purchase Ticket')}</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default RouteInformation