import Card from "react-bootstrap/Card";
import dunk from "./nike dunk low.png"
import {ProductDataHasStock} from "../../../data/ProductDataHasStock";

type Props = {
    productData: ProductDataHasStock
}

export default function ProductCard(props:Props) {
    return (
        <Card>
            <a href={`http://localhost:3000/#/product/${props.productData.pid}`}><Card.Img variant="top" src={dunk}/></a>
                <Card.Body>
                    <Card.Title>{props.productData.name}</Card.Title>
                    <Card.Text className={"card-price-tag"}>Price</Card.Text>
                    <Card.Text>{props.productData.price}</Card.Text>
                </Card.Body>
        </Card>
    )
}