import {Link, useNavigate} from "react-router-dom";
import {Button, ButtonGroup, Container, Table} from "react-bootstrap";
import logo from '../../../logo.svg'
import React from "react";
import ShoppingCartItems from "../ShoppingCartItems";
import './style.css'
import OrderSummary from "../OrderSummary";

export default function ShoppingCart() {

    return (
        <div className="d-flex">
                <div className="cart-items m-3">
                    <div className="delivery-banner">
                        <p>Free delivery on all orders and 14-days free return*</p>
                        <p>*Return policy may differ in different promotions, please refer to the individual terms and
                            conditions at Promotion T&C page for details.</p>
                    </div>
                    <div className="cart-items-header">
                        <div className="d-flex w-50 gap-2">
                            <h4>YOUR CART</h4>
                            <p>4 ITEMS</p>
                        </div>
                        <div style={{display: "flex", width: "50%"}}>
                            <Link className="d-flex w-100 justify-content-end" to="/"><h4>CONTINUE SHOPPING</h4></Link>
                        </div>
                    </div>
                    <div>
                        <Table striped>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                Array.from({length: 5}).map(() => {
                                    return <ShoppingCartItems/>
                                })
                            }
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="order-summary m-3">
                    <OrderSummary/>
                </div>
        </div>
    )
}