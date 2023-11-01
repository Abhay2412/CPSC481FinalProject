import React, {useEffect} from "react";
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import PurchaseSuccesfulIcon from "../assets/images/PurchaseSuccesfulIcon.svg"
import { useNavigate } from 'react-router-dom';
import RefundsCanBeProcessedIcon from "../assets/images/RefundsCanBeProcessedIcon.svg"

const SuccessfulPurchaseScreen = (props) => {
    const navigate = useNavigate();
    return (
        <Container className="mt-5">
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{display: "flex", margin: "40px", marginTop: "70px", flexBasis: "50%"}}>
                    <div style={{display: "flex",flexDirection: "column"}}>
                        <div style={{fontFamily: "Arial sans-serif", fontWeight: "bold", fontSize: "20px"}}>
                            Please find your tickets below
                        </div>
                        <img style={{height: 150, width: "auto"}} src={PurchaseSuccesfulIcon} alt="Purchase Successful"/>
                    </div>
                </div>
                <div style={{display: "flex",margin: "40px", marginTop: "70px" ,flexDirection: "column", flexBasis: "50%"}}>
                    <div style={{fontFamily: "Arial sans-serif", fontWeight: "bold", fontSize: "20px"}}>
                        Refunds can be processed within 1 hour with reference code on ticket
                    </div>
                    <img style={{height: 100, width: "auto"}} src={RefundsCanBeProcessedIcon} alt="Refunds Can be processed"/>
                </div>
            </div>
            <Row className="buttons-row">
                <Col>
                    <Button style={{width: "200px", margin: "auto"}} className="button button-light-grey" block onClick={() => navigate('/')} >Return to Dashboard</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default SuccessfulPurchaseScreen