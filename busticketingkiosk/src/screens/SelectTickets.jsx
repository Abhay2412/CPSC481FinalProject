import React, { useEffect, useState, useContext } from 'react';
import { Button, Dropdown, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DurationLogo from '../assets/images/DurationLogo.png';
import "../styles/SelectTickets.css"
import TicketCounter from '../components/TicketCounter';
import { TicketCountContext } from '../App';

const SelectTicketsScreen = ({setPageTitle}) => {
    const navigate = useNavigate();
    const [selectedRoute, setSelectedRoute] = useState(null);
    const [nextDeparture, setNextDeparture] = useState('');
    const [duration, setDuration] = useState('');
    const { ticketCounts, setTicketCounts } = useContext(TicketCountContext);
    const routes = ["Bowness", "Mount Pleasant", "Sandstone", "Huntington", "Killarney", "Marda Loop", "North Pointe", "Dalhousie", "City Hall", "Castleridge", "Falconridge", "Nolan Hill"]
    const routeData = {
        "Bowness": { departure: "10:15 AM", duration: "45 minutes" },
        "Mount Pleasant": { departure: "10:30 AM", duration: "40 minutes" },
        "Sandstone": { departure: "10:45 AM", duration: "55 minutes" },
        "Huntington": { departure: "11:00 AM", duration: "50 minutes" },
        "Killarney": { departure: "11:15 AM", duration: "60 minutes" },
        "Marda Loop": { departure: "11:30 AM", duration: "35 minutes" },
        "North Pointe": { departure: "11:45 AM", duration: "40 minutes" },
        "Dalhousie": { departure: "12:00 PM", duration: "45 minutes" },
        "City Hall": { departure: "12:15 PM", duration: "50 minutes" },
        "Castleridge": { departure: "12:30 PM", duration: "55 minutes" },
        "Falconridge": { departure: "12:45 PM", duration: "50 minutes" },
        "Nolan Hill": { departure: "1:00 PM", duration: "30 minutes" }
    };
    const handleRouteChange = (route) => { setSelectedRoute(route); setNextDeparture(routeData[route].departure); setDuration(routeData[route].duration); };
    useEffect(() => {
        setPageTitle()
    },[]);
    return (
        <TicketCountContext.Provider value={ticketCounts}>
            <Container className="mt-5">
            <Row className="justify-content-center">
                <div className="text-center mb-4">
                    <h1>Purchase Ticket</h1>
                </div>
                <Col md={5}>
                <div className="mb-5 d-flex align-items-center">
                <span className="label-text-select-route mr-3"><b>Select Route:</b></span> 
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
                    <span className="label-text-departure mr-3"><b>Next Departure:</b> {nextDeparture}</span> 
                </div>
                <div className="mb-3 d-flex align-items-center">
                    <span className="label-text-duration  mr-3"><b>Duration:</b> {duration}</span> 
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
                        <Button className="button button-light-grey" block onClick={() => navigate('/dashboard')} >Return to Dashboard</Button>
                        <Button className="button button-light-green" block onClick={() => navigate('/payment')} disabled={!selectedRoute}>Next</Button>
                    </Col>
                </Row>
            </Container>
        </TicketCountContext.Provider>
      );
};

export default SelectTicketsScreen