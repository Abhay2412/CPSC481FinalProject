import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import RefundAirplane from "../assets/images/RefundAirplane.svg"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


const RefundConfirmation = (props) => {
    const location = useLocation()
    const allowableRefundNumbers = ['bowness123','nolanhill24','bow145'];
    const isRefundAllowed = allowableRefundNumbers.includes(location.state?.refundReferenceNumber?.toLowerCase());

    const navigate = useNavigate();
    return(
        <Container className="d-flex flex-column mt-5">
            <Row>
                <Col className="d-flex flex-column">
                    {isRefundAllowed ? <div>
                        <img src={RefundAirplane} alt="Refund Confirmation logo"/>
                        <div style={{color: "green"}}>Your refund has been initiated.</div>
                        <div>Please contact us via email or visit us in 24 hours if you  dont recieve the refund on your inital payment method</div>
                    </div> : <div className="text-danger">
                        Your have entered an incorrect reference number. Please return to the refund to enter a correct reference number,
                        </div>}
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Button className="button button-light-grey" block onClick={() => isRefundAllowed ? navigate('/dashboard') : navigate('/refund', {state: {refundReferenceNumber: location.state?.refundReferenceNumber}})}>{isRefundAllowed ? `Return to Dashboard` : "Return to refund screen"}</Button>
                </Col>
            </Row>
        </Container>
    )
};

export default RefundConfirmation