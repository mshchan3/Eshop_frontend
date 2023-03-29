import {Button, ButtonGroup, Form, InputGroup, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import CheckOutItem from "../CheckOutItem";
import {TransactionData} from "../../../data/TransactionData";

type Props = {
    transactionData: TransactionData | undefined
}
export default function CheckOutSummary(props: Props) {
    return (
        <div className="d-flex flex-column" style={{width: "40%", padding:"24px"}}>
            <div style={{backgroundColor: "#EAEAEA", display: "flex", alignItems: "center"}}>
                <div className="d-flex gap-2 align-items-baseline pt-3 ps-2" >
                    <h5 style={{marginBottom: 0}}>OrderSummary:</h5>
                    <p>1 Items</p>
                </div>
            </div>
            <div>
                <Table style={{overflow: "scroll"}}>
                    <tbody>
                    {
                        props.transactionData?.items.map((value) => {
                            return <CheckOutItem transactionItem={value} key={value.tpid}/>
                        })
                    }
                    </tbody>
                </Table>
            </div>
            <div>
                <h5 style={{textDecorationLine: "underline"}}>PROMO CODE</h5>
                <p style={{fontSize: "small", color: "grey"}}>coupons can only be used if the entire order
                    is regular-price items.</p>
            </div>
            <div>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Enter Promo Code"
                        aria-label="Enter Promo Code"
                        aria-describedby="basic-addon2"
                        style={{borderRadius: 0}}
                    />
                    <Button variant="outline-dark" id="button-addon2" style={{borderRadius: 0}}>
                        APPLY
                    </Button>
                </InputGroup>
            </div>
            <div className="d-flex justify-content-between">
                <p>Delivery</p>
                <p>HK$ 0.00</p>
            </div>
            <div className="d-flex justify-content-between">
                <p>Total</p>
                <p>HK$ {props.transactionData?.total}</p>
            </div>
        </div>
    )
}