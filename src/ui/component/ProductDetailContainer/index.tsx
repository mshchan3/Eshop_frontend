import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {Button, ButtonGroup, Container, Form} from "react-bootstrap";
import React from "react";
import {ProductData} from "../../../data/ProductData";
import {CartItemApi} from "../../../api/CartItemApi";
import {useNavigate} from "react-router-dom";

type Props = {
    productData: ProductData,
    quantity: number,
    setQuantity: (quantity:number) => void
}

export default function ProductDetailContainer(props: Props) {
    const natvigate = useNavigate();
    const addQuantity = () => {
        if (props.quantity + 1 <= props.productData.stock){
            props.setQuantity(props.quantity + 1)
        }
    }

    const deductQuantity = () => {
        if (props.quantity - 1 > 0){
            props.setQuantity(props.quantity - 1)
        }
    }

    const handleOnClick = async () => {
        try {
            let response = await CartItemApi.addCartItem(props.productData.pid.toString(), props.quantity.toString())
        } catch (err){
            natvigate("/login")
        }
    }

    return (
        <Container>
            <div className={"product-box"}>
                <div className={"product-photo-box"}>
                    <img className={"product-photo mt-5"}
                         src={props.productData.image_url}/>
                </div>
                <div className={"product-detail-box"}>
                    <div className={"product-name"}>
                        <h3>{props.productData?.name}</h3>
                        <div className={"d-flex gap-2"}>
                            <p>{props.productData.category}</p>
                            <p>${props.productData?.price}</p>
                        </div>
                    </div>
                    <div className={"stock-banner"}>
                        <FontAwesomeIcon icon={solid("stopwatch")} shake style={{color: "#016241"}} size={"xl"}/>
                        <p>Only {props.productData?.stock} Left!</p>
                    </div>
                    <div className={"add-to-cart-box d-flex flex-column gap-4"}>
                        <Form.Select style={{borderRadius: 0}}>
                            <option>Size:</option>
                            <option>US 9</option>
                            <option>US 9.5</option>
                            <option>US 10</option>
                            <option>US 10.5</option>
                            <option>US 11</option>
                        </Form.Select>
                        <div className={"d-flex flex-row gap-4"}>
                            <ButtonGroup aria-label="Basic example">
                                <Button style={{width: "64px", background: "darkgreen",border: "darkgreen", borderRadius: 0 }}
                                        onClick={addQuantity}> + </Button>
                                <Button variant={"light"} disabled
                                        style={{width: "64px"}}>{props.quantity}</Button>
                                <Button style={{width: "64px", background: "darkgreen", border: "darkgreen", borderRadius: 0}}
                                        onClick={deductQuantity}> - </Button>
                            </ButtonGroup>
                            <Button style={{width: "256px", background: "darkgreen", border: "darkgreen", borderRadius: 0}}
                                    onClick={handleOnClick}>Add To Cart</Button>
                        </div>
                    </div>
                    <div className={"product-description"}>
                        <p>Created for the hardwood but taken to the streets, the Nike Dunk Low Retro SE Men's Shoes
                            return with embroidered details, contrast stitching and throwback hoops flair. Its
                            padded, low-cut collar make your foot in comfort.</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}