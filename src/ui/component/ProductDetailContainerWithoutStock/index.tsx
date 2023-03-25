import dunk from "../ProductCard/nike dunk low.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {Button, ButtonGroup, Container, Form} from "react-bootstrap";
import React from "react";
import {ProductData} from "../../../data/ProductData";

type Props = {
    productData: ProductData
}

export default function ProductDetailContainerWithoutStock(props: Props) {
    return (
        <Container>
            <div className={"product-box"}>
                <div className={"product-photo-box"}>
                    <img className={"product-photo"} src={props.productData.image_url}/>
                </div>
                <div className={"product-detail-box"}>
                    <div className={"product-name"}>
                        <h3>{props.productData?.name}</h3>
                        <div className={"d-flex gap-2"}>
                            <p>{props.productData.category}</p>
                            <p>${props.productData?.price}</p>
                        </div>
                    </div>
                    <div className={"add-to-cart-box d-flex flex-column gap-4"}>
                        <Form.Select disabled>
                            <option>Size:</option>
                            <option>US 9</option>
                            <option>US 9.5</option>
                            <option>US 10</option>
                            <option>US 10.5</option>
                            <option>US 11</option>
                        </Form.Select>
                        <div className={"d-flex flex-row gap-4"}>
                            <ButtonGroup aria-label="Basic example">
                                <Button disabled style={{width: "64px", background: "darkgreen", border: 0}}> + </Button>
                                <Button variant={"light"} disabled style={{width: "64px"}}>0</Button>
                                <Button disabled style={{width: "64px", background: "darkgreen", border: 0}}> - </Button>
                            </ButtonGroup>
                            <Button disabled style={{width: "256px", background: "darkgreen", border: 0}}>Sold Out</Button>
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