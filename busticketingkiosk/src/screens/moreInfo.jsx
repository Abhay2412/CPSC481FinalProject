import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import Bus1 from "../assets/images/Bus1.svg";
import Bus2 from "../assets/images/Bus2.svg";
import MoonLogo from "../assets/images/MoonIcon.svg";
import DisableIcon from "../assets/images/DisableIcon.svg";

const MoreInfo = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const {selectedRoute, routeData} = location.state;
    const {nextDeparture} = routeData

    const addMinutes = (timeStr,minutesToAdd) => {
        const [hh, mm, period] = timeStr.match(/(\d+):(\d+) (AM|PM)/).slice(1);
        let totalMinutes = (parseInt(hh) % 12) * 60 + parseInt(mm) + minutesToAdd;
        const newHH = ((totalMinutes / 60) | 0) % 12 || 12;
        const newMM = totalMinutes % 60;
        return `${newHH}:${String(newMM).padStart(2, '0')} ${period}`;
    }

    return (
        <Container className="mt-5" style={{fontFamily: "Ariel, sans-serif"}}>
            <Row className="header-row">
                <Col>
                    <h1>More Information</h1>
                </Col>
            </Row>
            <Row>
                <Col style={{fontWeight: "bold"}}>
                    Next Departures
                </Col>
                <Col>
                    {nextDeparture}
                </Col>
                <Col>
                    {addMinutes(nextDeparture, 15)}
                </Col>
                <Col>
                    {addMinutes(nextDeparture, 30)}
                </Col>
            </Row>
            <Row className="mt-4">
                <Col style={{fontWeight: "bold"}}>
                    Bus Types
                </Col>
                <Col>
                    <img style={{height: 50, width: "auto"}} src={Bus1} alt="Bus 1"/>
                    <img style={{height: 30, width: "auto"}} src={DisableIcon} alt="Disable Icon"/>
                </Col>
                <Col>
                    <img style={{height: 50, width: "auto"}} src={Bus2} alt="Bus 1"/>
                </Col>
                <Col>
                    <img style={{height: 50, width: "auto"}} src={Bus1} alt="Bus 1"/>
                    <img style={{height: 30, width: "auto"}} src={DisableIcon} alt="Disable Icon"/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col style={{fontWeight: "bold"}}>
                    Last departure
                </Col>
                <Col>
                    {routeData?.lastDeparture}
                    <img src={MoonLogo} alt="Moon Logo"/>
                </Col>
                <Col/>
                <Col/>
            </Row>
            <Row className="mt-4">
                <Col style={{fontWeight: "bold"}}>
                    Bus Frequency
                </Col>
                <Col>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div>
                            Monday-Friday
                        </div>
                        <div>
                            Every 15 minutes
                        </div>
                    </div>
                </Col>
                <Col>
                <div style={{display: "flex", flexDirection: "column"}}>
                        <div>
                            Saturday-Sunday
                        </div>
                        <div>
                            Every 45 minutes
                        </div>
                    </div>
                </Col>
                <Col/>
            </Row>
            <div className="mt-5">
                Buses offering accessibility are identified with this icon 
                <img style={{height: 30, width: "auto"}} src={DisableIcon} alt="Disable Icon"/>
            </div>
            <Row className="buttons-row mt-4">
                <Col className="col-md-5">
                    <Button style={{width: "250px"}} className="button button-light-grey" block onClick={() => navigate('/routeInformation',{state: {...location.state}})} >Return to Route Information</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default MoreInfo