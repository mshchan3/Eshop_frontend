import logo from "../../../logo.svg";
import {Link} from "react-router-dom";
import {Button, ButtonGroup} from "react-bootstrap";
import React from "react";

export default function ShoppingCartItems() {
    return (
        <tr>
            <td>1</td>
            <td className="d-flex">
                <div className="w-25">
                    <img src={logo} style={{width: "150px", height: "150px"}}/>
                </div>
                <div className="d-flex flex-column w-75 h-100">
                    <div className="h-33">
                        <h4>product name</h4>
                    </div>
                    <div className="d-flex gap-2 h-33">
                        <div className="w-15">
                            <p>Size: L</p>
                        </div>
                        <div className="w-15">
                            <Link to={`/product/1`}>Size Chart</Link>
                        </div>
                        <div className="w-15">
                        <p>HK$499</p>
                        </div>
                        <div className="d-flex w-55 justify-content-end">
                            <ButtonGroup className="w-100" aria-label="Basic example">
                                <Button style={{width: "64px", background: "darkgreen", border: 0}}> + </Button>
                                <Button variant={"light"} disabled style={{width: "64px"}}>1</Button>
                                <Button style={{width: "64px", background: "darkgreen", border: 0}}> - </Button>
                            </ButtonGroup>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end h-33">
                        <p>Sub Total</p>
                    </div>
                </div>
            </td>
        </tr>
    )
}