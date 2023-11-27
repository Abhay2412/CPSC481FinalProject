import React, { useEffect, useState, useContext } from 'react';
import { Button, Dropdown, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DurationLogo from '../assets/images/DurationLogo.png';
import "../styles/SelectTickets.css"
import TicketCounter from '../components/TicketCounter';
import { TicketCountContext } from '../App';
import { useTranslation } from 'react-i18next';

const SelectTicketsScreen = ({setPageTitle}) => {
    const navigate = useNavigate();
    const [selectedRoute, setSelectedRoute] = useState(null);
    const [routeNumber, setRouteNumber] = useState("");
    const [nextDeparture, setNextDeparture] = useState('');
    const [duration, setDuration] = useState('');
    const { ticketCounts, setTicketCounts } = useContext(TicketCountContext);
    const { t } = useTranslation();
    const routes = ["Bowness", "Mount Pleasant", "Sandstone", "Huntington", "Killarney", "Marda Loop", "North Pointe", "Dalhousie", "City Hall", "Castleridge", "Falconridge", "Nolan Hill"]
    const routeData = {
        "Bowness": { routeNumber: "1", nextDeparture: "10:15 AM", duration: "30 minutes", numberOfStops: 13, lastDeparture: "11:15 PM"},
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
    const handleRouteChange = (route) => { setSelectedRoute(route); setRouteNumber(routeData[route].routeNumber); setNextDeparture(routeData[route].nextDeparture); setDuration(routeData[route].duration); };
    useEffect(() => {
        setPageTitle()
    },[]);
    return (
        <TicketCountContext.Provider value={ticketCounts}>
            <Container className="mt-5">
            <Row className="justify-content-center">
                <div className="text-center mb-4">
                    <h1>{t('Purchase Ticket')}</h1>
                </div>
                <Col xs={12}>
                        <p className="ticket-validity-note">
                            {t('Tickets are valid for 90 minutes from the time of purchase.')}
                        </p>
                    </Col>
                <Col md={5}>
                <div className="mb-5 d-flex align-items-center">
                <span className="label-text-select-route mr-3"><b>{t('Select Route:')}</b></span> 
                    <Dropdown alignRight>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {selectedRoute || "Select a Route"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {routes.map(route => (
                            <Dropdown.Item key={route} onClick={() => handleRouteChange(route)}>
                                {route}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="mb-3 d-flex align-items-center">
                    <span className="label-text-departure mr-3"><b>{t('Next Departure:')}</b> {nextDeparture}</span> 
                </div>
                <div className="mb-3 d-flex align-items-center">
                    <span className="label-text-duration mr-3"><b>{t('Route Number:')}</b> {routeNumber}</span> 
                </div>
                <div className="mb-3 d-flex align-items-center">
                    <span className="label-text-duration  mr-3"><b>{t('Duration: ')}</b> {duration}</span> 
                </div>
                <div className="mb-3 d-flex align-items-center">
                    <img src={DurationLogo} className='duration-logo' alt='Duration Logo'></img>
                </div>
                
                </Col>
                <Col md={5}>
                    <div className="ticket-counter">
                        <TicketCounter label="Senior" minAge={65} maxAge={""} ticketPrice={"$3.00"} currentCount={ticketCounts.Senior}  setCurrentCount={(count) => setTicketCounts(prevState => ({ ...prevState, Senior: count }))}/>
                    </div>
                    <div className="ticket-counter">
                        <TicketCounter label="Adult" minAge={18} maxAge={64} ticketPrice={"$3.60"} currentCount={ticketCounts.Adult}  setCurrentCount={(count) => setTicketCounts(prevState => ({ ...prevState, Adult: count }))}/>
                    </div>
                    <div className="ticket-counter">
                        <TicketCounter label="Youth" minAge={13} maxAge={17} ticketPrice={"$2.45"} currentCount={ticketCounts.Youth}  setCurrentCount={(count) => setTicketCounts(prevState => ({ ...prevState, Youth: count }))}/>
                    </div>
                    <div className="ticket-counter">
                        <TicketCounter label="Child" minAge={0} maxAge={12} ticketPrice={"Free"} currentCount={ticketCounts.Child}  setCurrentCount={(count) => setTicketCounts(prevState => ({ ...prevState, Child: count }))}/>
                    </div>
                </Col>
            </Row>
            <Row className="buttons-row">
                    <Col>
                        <Button className="button button-light-grey" block onClick={() => navigate('/dashboard')}>{t('Return to Dashboard')}</Button>
                        <Button className="button button-light-green" block onClick={() => navigate('/payment', {  state: { selectedRoute, routeNumber } })} disabled={!selectedRoute}>{t('Next')}</Button>
                    </Col>
            </Row>
            </Container>
        </TicketCountContext.Provider>
      );
};

export default SelectTicketsScreen