import React, { useEffect, useContext } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { TicketCountContext } from '../App';
import InsertIcon from '../assets/images/InsertCardImage.svg';
import TapIcon from '../assets/images/WirelessPayment.svg';
import VisaIcon from '../assets/images/VisaPayment.svg';
import MasterCardIcon from '../assets/images/MastercardImage.svg';
import InteracIcon from '../assets/images/InteracLogo.svg';
import "../styles/MakePayment.css"

const MakePaymentScreen = ({setPageTitle}) => {
    const navigate = useNavigate();
    const { ticketCounts } = useContext(TicketCountContext);
    const ticketPrices = { Senior: 3.00, Adult: 3.60, Youth: 2.45, Child: 0.00  };
    const computeTotal = () => {
        let total = 0;
        for (const ticketType in ticketCounts) {
            total += (ticketCounts[ticketType] || 0) * (ticketPrices[ticketType] || 0);
        }
        return total.toFixed(2);
    };
    const computeTotalTickets = () => {
        let totalTickets = 0;
        for (const ticketType in ticketCounts) {
            totalTickets += ticketCounts[ticketType] || 0;
        }
        return totalTickets;
    };
    return (
        <Container>
        <Row className="justify-content-center mb-4">
            <h1>Payment</h1>
        </Row>
        <Row>
            <Col md={6} className="text-center">
                
                <p><b>Please insert or tap card</b></p>
                <img src={InsertIcon} width="150px" alt='Insert Icon' />
                <img src={TapIcon} width="150px" alt='Tap Icon' />
                <p> </p>
                <p><b>Accepted Card Types</b></p>
                <img src={VisaIcon} width="150px" alt='Visa Icon' />
                <img src={MasterCardIcon} width="150px" alt='MasterCard Icon' />
                <img src={InteracIcon} width="150px" alt='Interac Icon' />
            </Col>
            <Col md={6} style={{ backgroundColor: '#eef', padding: 20, borderRadius: 10 }}>
                <h3>Summary</h3>
                {Object.keys(ticketCounts).map(ticketType => (
                    ticketCounts[ticketType] > 0 && (
                        <p key={ticketType}>
                            {ticketType} x {ticketCounts[ticketType]} = ${(ticketPrices[ticketType] * ticketCounts[ticketType]).toFixed(2)}
                        </p>
                    )
                ))}
                <p><b>Total Tickets:</b> {computeTotalTickets()}</p>
                <div style={{ marginTop: 20, borderTop: '1px solid #aaa', paddingTop: 10 }}>
                    <h4>Total</h4>
                    <p>${computeTotal()}</p>
                </div>
            </Col>
        </Row>
        <Row className="buttons-row">
            <Col>
                <Button className="button button-light-red" block onClick={() => navigate('/tickets')} >Cancel Purchase</Button>
                <Button className="button button-light-green" block onClick={() => navigate('/paymentSuccessful')} >Purchase Tickets</Button>
            </Col>
        </Row>
    </Container>
    );
}

export default MakePaymentScreen;