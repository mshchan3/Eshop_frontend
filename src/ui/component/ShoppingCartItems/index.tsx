import {Link} from "react-router-dom";
import {Button, ButtonGroup} from "react-bootstrap";
import React, {useContext} from "react";
import {CartItemData} from "../../../data/CartItemData";
import {CartItemApi} from "../../../api/CartItemApi";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {CartContext} from "../../page/ShoppingCartPage";


type Props = {
    cartItem: CartItemData
}

export default function ShoppingCartItems(props: Props) {
    const updateCart = useContext(CartContext)
    const updateCartItemQuantity = async (quantity: number) => {
        let response = await CartItemApi.updateCartItem(props.cartItem.pid.toString(), quantity.toString())
        if (updateCart && response && quantity > 0){
            updateCart.updateCart(response)
        } else if (updateCart && response && quantity === 0) {
            updateCart.deleteCart(props.cartItem.pid)
        }
    }

    const deleteCartItem = async () => {
        let response = await CartItemApi.deleteCartItem(props.cartItem.pid.toString())
        if (updateCart && response){
            updateCart.deleteCart(props.cartItem.pid)
        }
    }

    return (
        <tr>
            <td className="d-flex gap-4" style={{width: "100%"}}>
                <div className="d-flex justify-content-center align-items-center">
                    <Link to={`/product/${props.cartItem.pid}`}>
                        <img src={props.cartItem.image_url} style={{width: "125px", height: "90px"}}/>
                    </Link>
                </div>
                <div className="d-flex flex-column w-100">
                    <div className="d-flex justify-content-between">
                        <Link to={`/product/${props.cartItem.pid}`} style={{color: "black", textDecoration: "none" }}>
                            <h4>{props.cartItem.name}</h4>
                        </Link>
                        <Button style={{backgroundColor: "white", border: 0, paddingTop: 0}} onClick={deleteCartItem}>
                            <FontAwesomeIcon icon={solid("x")} style={{color: "#000000"}}/>
                        </Button>
                    </div>
                    <div className="d-flex gap-2 align-items-baseline">
                        <div className="w-25">
                            <p>HK$ {props.cartItem.price}</p>
                        </div>
                        <div className="w-25">
                            <p>Size: US10</p>
                        </div>
                        <div className="w-25">
                            <Link to={`/product/1`} style={{color: "black"}}>Size Chart</Link>
                        </div>
                        <div className="d-flex justify-content-end w-100">
                            <ButtonGroup size="sm" aria-label="Basic example" style={{height: "36px"}}>
                                <Button style={{background: "black", border: "1px black solid" , borderRadius: 0, width: "36px"}}
                                        onClick={() => {
                                            updateCartItemQuantity(props.cartItem.cart_quantity + 1)
                                        }}
                                > + </Button>
                                <Button variant={"light"} disabled style={{width: "36px"}}
                                        >{props.cartItem.cart_quantity}</Button>
                                <Button style={{background: "black", border: "1px black solid" , borderRadius: 0, width: "36px"}}
                                        onClick={() => {
                                            updateCartItemQuantity(props.cartItem.cart_quantity - 1)
                                        }}
                                > - </Button>
                            </ButtonGroup>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <p>Sub Total: ${props.cartItem.cart_quantity * props.cartItem.price}</p>
                    </div>
                </div>
            </td>
        </tr>
    )
}