import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import RefundAirplane from "../assets/images/RefundAirplane.svg"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const RefundConfirmation = (props) => {
    const location = useLocation();
    const { t } = useTranslation();
    const allowableRefundNumbers = ['bowness123','nolanhill24','bow145'];
    const isRefundAllowed = allowableRefundNumbers.includes(location.state?.refundReferenceNumber?.toLowerCase());

    const navigate = useNavigate();
    return(
        <Container className="d-flex flex-column mt-5">
            <Row className="header-row">
                <Col>
                    {isRefundAllowed ? <h1>{t('Refund Success')}</h1> : <h1>{t('Refund Failed')}</h1>}
                </Col>
            </Row>
            <Row>
                <Col className="d-flex flex-column">
                    {isRefundAllowed ? <div>
                        <img src={RefundAirplane} alt="Refund Confirmation logo"/>
                        <div style={{color: "green"}}>{t('Your refund has been initiated.')}</div>
                        <div>{t('Please contact us via 📧 email or phone 📞+1-(403)-262-1000 in 24 hours if your refund is not processed on your original payment method.')}</div>
                    </div> : 
                        <div className="text-danger">
                        {t('You have entered an incorrect reference number. Please return to the refund screen to try again.')}
                        </div>}
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Button className="button button-light-grey" block onClick={() => isRefundAllowed ? navigate('/dashboard') : navigate('/refund', {state: {refundReferenceNumber: location.state?.refundReferenceNumber}})}>{isRefundAllowed ? t('Dashboard') : t('Refund')}</Button>
                </Col>
            </Row>
        </Container>
    )
};

export default RefundConfirmation