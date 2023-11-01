import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import RefundImage from "../assets/images/RefundImage.png";
import { useLocation, useNavigate } from "react-router-dom";

const RefundScreen = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [refundReferenceNumber, setRefundReferenceNumber] = useState("");
    const [inputElementError, setinputElementError] = useState(false);

    useEffect(() => {
        if(location.state?.refundReferenceNumber)
        {
            setRefundReferenceNumber(location.state?.refundReferenceNumber);
        }
    },[])

    return (
        <Container className="mt-5 d-flex flex-column" style={{fontStyle: "Ariel, sans-serif"}}>
            <Row>
                <Col>
                    <Form className="d-flex flex-column">
                        <div>
                            <Form.Label>Reference Number</Form.Label>
                            <img src={RefundImage} style={{height: 100, width: "auto", marginLeft: "50px"}} />
                        </div>
                        <Form.Control value={refundReferenceNumber} placeholder="Enter reference Number" className="align-self-center" style={{width: "50%"}} onChange={(e) => {setRefundReferenceNumber(e.target.value); e.target.value.length >= 5 && setinputElementError(false)}}/>
                        <Form.Text className={`${refundReferenceNumber.length < 5 && inputElementError ? "text-danger": ""}`}>
                            Please find the reference number on the ticket. Example format: BOW145
                        </Form.Text>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="">
                        <Button className="button button-light-grey" block onClick={() => navigate('/dashboard')} >Return to Dashboard</Button>
                        <Button className="button button-light-green" block onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation(); 
                            refundReferenceNumber.length < 5 && !inputElementError && setinputElementError(true); 
                            refundReferenceNumber.length >= 5 && navigate('/refundConfirmation',{state: {refundReferenceNumber}})}}>Next</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default RefundScreen