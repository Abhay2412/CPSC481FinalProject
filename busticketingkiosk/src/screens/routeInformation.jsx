import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Dropdown, Container, Row, Col } from 'react-bootstrap';
import RouteMap from "../assets/images/RouteMap.svg"


const RouteInformation = (props) => {
    const navigate = useNavigate();
    const [nextDeparture, setNextDeparture] = useState("");
    const [duration, setDuration] = useState("");
    const [numberOfStops, setNumberOfStops] = useState();
    const [selectedRoute, setSelectedRoute] = useState();
    const location = useLocation();

    const routeData = {
        "Bowness": { nextDeparture: "10:15 AM", duration: "45 minutes", numberOfStops: 10, lastDeparture: "11:15 PM"},
        "Mount Pleasant": { nextDeparture: "10:30 AM", duration: "40 minutes", numberOfStops: 11, lastDeparture: "11:30 PM"},
        "Sandstone": { nextDeparture: "10:45 AM", duration: "55 minutes", numberOfStops: 16, lastDeparture: "11:15 PM" },
        "Huntington": { nextDeparture: "11:00 AM", duration: "50 minutes", numberOfStops: 15, lastDeparture: "11:15 PM" },
        "Killarney": { nextDeparture: "11:15 AM", duration: "60 minutes", numberOfStops: 14, lastDeparture: "11:10 PM" },
        "Marda Loop": { nextDeparture: "11:30 AM", duration: "35 minutes", numberOfStops: 17, lastDeparture: "10:15 PM" },
        "North Pointe": { nextDeparture: "11:45 AM", duration: "40 minutes", numberOfStops: 12, lastDeparture: "10:20 PM" },
        "Dalhousie": { nextDeparture: "12:00 PM", duration: "45 minutes", numberOfStops: 11, lastDeparture: "11:10 PM" },
        "City Hall": { nextDeparture: "12:15 PM", duration: "50 minutes", numberOfStops: 15, lastDeparture: "11:25 PM" },
        "Castleridge": { nextDeparture: "12:30 PM", duration: "55 minutes", numberOfStops: 11, lastDeparture: "11:45 PM" },
        "Falconridge": { nextDeparture: "12:45 PM", duration: "50 minutes", numberOfStops: 13, lastDeparture: "11:15 PM" },
        "Nolan Hill": { nextDeparture: "1:00 PM", duration: "30 minutes" , numberOfStops: 10, lastDeparture: "11:00 PM"}
    };

    useEffect(() => {
        if(location.state?.selectedRoute)
        {
            const {selectedRoute} = location.state;
            setSelectedRoute(selectedRoute);
            setNextDeparture(routeData[selectedRoute].nextDeparture);
            setDuration(routeData[selectedRoute].duration);
            setNumberOfStops(routeData[selectedRoute].numberOfStops);
        }
    },[location.state?.route])

    const handleRouteChange = (route) => { setSelectedRoute(route); setNextDeparture(routeData[route].nextDeparture); setDuration(routeData[route].duration); setNumberOfStops(routeData[route].numberOfStops) };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={5}>
                    <div className="mb-5 d-flex align-items-center">
                    <span className="label-text-select-route" style={{marginRight: "10px"}}><b>Select Route:</b></span>
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
                            <span className="label-text-select-route"><b>Next Departure:</b> {nextDeparture}</span> 
                        </div>
                        <div className="mb-3 d-flex align-items-center">
                            <span className="label-text-select-route"><b>Number of Stops:</b> {numberOfStops}</span> 
                        </div>
                        <div className="mb-3 d-flex align-items-center">
                            <span className="label-text-select-route"><b>Duration:</b> {duration}</span> 
                        </div>
                    </div>
                    <div>
                        <Button className="button button-light-blue" disabled={!selectedRoute} block onClick={() => navigate('/moreInfo', {state: {selectedRoute, routeData: routeData[selectedRoute]}})} >More Info</Button>
                    </div>
                </Col>
                <Col md={5}>
                    <div style={{fontFamily: "Ariel, sans-serif", fontWeight: "bold"}}>
                        Route Map
                    </div>
                    <img src={RouteMap} alt="Route Map" />
                </Col>
            </Row>
            <Row className="buttons-row">
                <Col className="col-md-5">
                    <Button style={{width: "200px"}} className="button button-light-grey" block onClick={() => navigate('/dashboard')} >Return to Dashboard</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default RouteInformation