import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import TicketDispenserIcon from "../assets/images/TicketDispenser.png"
import { useNavigate } from 'react-router-dom';
import RefundsCanBeProcessedIcon from "../assets/images/RefundsCanBeProcessedIcon.svg"
import { useTranslation } from 'react-i18next';
import ProgressBarComponent from '../components/ProgressBar';
import "../styles/SuccessfulPurchaseScreen.css"


const UnsuccessfulPurchaseScreen = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <Container className="mt-5">
             <ProgressBarComponent currentStep={3} />
            <Row className="header-row">
                <Col>
                    <h1>{t('Purchase Unsuccessful')}</h1>
                </Col>
            </Row>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{display: "flex", margin: "40px", marginTop: "70px", flexBasis: "50%"}}>
                    <div style={{display: "flex",flexDirection: "column"}}>
                        <div style={{fontFamily: "Arial sans-serif", fontWeight: "bold", fontSize: "20px"}}>
                            {t('Payment failed, please go back to the payment screen and try again')}
                        </div>
                        <img style={{height: 200, width: 100, marginLeft: 175}} src={TicketDispenserIcon} alt="Ticket Kiosk"/>
                    </div>
                </div>
                {/* <div style={{display: "flex",margin: "40px", marginTop: "70px" ,flexDirection: "column", flexBasis: "50%"}}>
                    <div style={{fontFamily: "Arial sans-serif", fontWeight: "bold", fontSize: "20px"}}>
                        {t('Refunds can be processed within 1 hour with reference code on ticket')}
                    </div>
                    <img style={{height: 100, width: "auto"}} src={RefundsCanBeProcessedIcon} alt="Refunds Can be processed"/>
                </div> */}
            </div>
            <Row className="buttons-row">
                <Col>
                    <div className="buttons-group">
                        <Button className="button button-lightgrey" block onClick={() => navigate('/payment')}>{t('Payment')}</Button>
                        {/* <Button className="button button-light-orange" block onClick={() => navigate('/refund')}>{t('Refund')}</Button> */}
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default UnsuccessfulPurchaseScreen