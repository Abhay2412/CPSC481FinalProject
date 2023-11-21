import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import RefundImage from "../assets/images/RefundImage.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const RefundScreen = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [refundReferenceNumber, setRefundReferenceNumber] = useState("");
    const [inputElementError, setinputElementError] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        if(location.state?.refundReferenceNumber)
        {
            setRefundReferenceNumber(location.state?.refundReferenceNumber);
        }
    },[])

    return (
        <Container className="mt-5 d-flex flex-column" style={{fontStyle: "Ariel, sans-serif"}}>
            <Row className="header-row">
                <Col>
                    <h1>{t('Refund')}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form className="d-flex flex-column">
                        <div>
                            <Form.Label>{t('Reference Number')}</Form.Label>
                            <img src={RefundImage} style={{height: 100, width: "auto", marginLeft: "50px"}} />
                        </div>
                        <Form.Control value={refundReferenceNumber} placeholder={t('Enter reference Number')} className="align-self-center" style={{width: "50%"}} onChange={(e) => {setRefundReferenceNumber(e.target.value); e.target.value.length >= 5 && setinputElementError(false)}}/>
                        <Form.Text className={`${refundReferenceNumber.length < 5 && inputElementError ? "text-danger": ""}`}>
                            {t('Please find the reference number on the ticket. Example format: BOW145')}
                        </Form.Text>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="">
                        <Button className="button button-light-grey" block onClick={() => navigate('/dashboard')} >{t('Dashboard')}</Button>
                        <Button className="button button-light-green" block onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation(); 
                            refundReferenceNumber.length < 5 && !inputElementError && setinputElementError(true); 
                            refundReferenceNumber.length >= 5 && navigate('/refundConfirmation',{state: {refundReferenceNumber}})}}>{t('Next')}</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default RefundScreen