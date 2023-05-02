import './style.css';
import PaymentImg from "../PaymentImg";
import {Container, Table} from "react-bootstrap";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {regular, solid} from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Footer() {
    return (
        <div style={{marginTop: "48px"}}>
            <div style={{backgroundColor: "darkgreen", color: "white", display: "flex", alignItems: "center", justifyContent: "center",
            padding: "24px"}}>
                <h3 style={{marginBottom: 0}}>Join StockX to receive 10% off welcome offer & unlock more rewards!</h3>
            </div>
            <div style={{backgroundColor: "black", color: "white", padding: "24px 0"}}>
                <Container>
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item flex-fill"
                            style={{border: "none", backgroundColor: "black", color: "white"}}>
                            <FontAwesomeIcon icon={solid("address-book")} style={{color: "#ffffff", marginRight: "4px"}} />Contact Us
                        </li>
                        <li className="list-group-item flex-fill"
                            style={{border: "none", backgroundColor: "black", color: "white"}}>
                            <FontAwesomeIcon icon={regular("message")} style={{color: "#ffffff", marginRight: "4px"}} />Live Chat
                        </li>
                        <li className="list-group-item flex-fill"
                            style={{border: "none", backgroundColor: "black", color: "white"}}>
                            <FontAwesomeIcon icon={solid("phone")} style={{color: "#ffffff", marginRight: "4px"}} />3100-0496
                        </li>
                        <li className="list-group-item flex-fill"
                            style={{border: "none", backgroundColor: "black", color: "white"}}>
                            <FontAwesomeIcon icon={solid("envelope")} style={{color: "#ffffff", marginRight: "4px"}} />cs@stockx.com
                        </li>
                        <li className="list-group-item flex-fill"
                            style={{border: "none", backgroundColor: "black", color: "white"}}>
                            <FontAwesomeIcon icon={solid("clock")} style={{color: "#ffffff", marginRight: "4px"}} />10:00 - 22:00
                        </li>
                    </ul>
                </Container>
            </div>
            <PaymentImg/>
        </div>
    )
}