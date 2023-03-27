import {Link} from "react-router-dom";
import {Button, Table} from "react-bootstrap";
import React from "react";
import ShoppingCartItems from "../ShoppingCartItems";
import './style.css'
import OrderSummary from "../OrderSummary";
import {CartItemData} from "../../../data/CartItemData";

type Props ={
    cartItemList: CartItemData[] | null | undefined;
}

export default function ShoppingCart(props: Props) {
    const getTotalQuantity = () => {
        let totalQuantity:number = 0;
        props.cartItemList?.map((value) => {
            totalQuantity += value.cart_quantity
        })
        return totalQuantity;
    }

    return (
        <div className="d-flex">
                <div className="cart-items m-3 w-75">
                    <div className="delivery-banner bg-light p-2">
                        <h5 style={{marginBottom: "2px"}}>Free delivery on all orders and 14-days free return*</h5>
                        <p style={{fontSize: "small", marginBottom: 0}}>*Return policy may differ in different promotions, please refer to the individual terms and
                            conditions at Promotion T&C page for details.</p>
                    </div>
                    <div className="cart-items-header" style={{marginTop: "16px"}}>
                        <div className="d-flex gap-2 align-items-baseline">
                            <h4>YOUR CART</h4>
                            <p>{getTotalQuantity()} ITEMS</p>
                        </div>
                        <div className="d-flex">
                            <Link className="d-flex w-100 justify-content-end" style={{color: "black"}}
                                  to="/"><h4>CONTINUE SHOPPING</h4></Link>
                        </div>
                    </div>
                    <div>
                        <Table>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                props.cartItemList?.map((value) => {
                                    return <ShoppingCartItems key={value.pid} cartItem={value}/>
                                })
                            }
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="order-summary m-3 w-25">
                    <OrderSummary cartItemList={props.cartItemList}/>
                </div>
        </div>
    )
}