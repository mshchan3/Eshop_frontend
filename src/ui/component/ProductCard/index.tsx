import Card from "react-bootstrap/Card";
import {ProductDataHasStock} from "../../../data/ProductDataHasStock";
import './style.css'

type Props = {
    productData: ProductDataHasStock
}

export default function ProductCard(props:Props) {
    return (
        <Card>
            <a href={`/#/product/${props.productData.pid}`}><Card.Img variant="top" src={props.productData.image_url}/></a>
                <Card.Body >
                    <Card.Title>{props.productData.name}</Card.Title>
                    <Card.Text className={"card-price-tag"}>Price</Card.Text>
                    <Card.Text>${props.productData.price}</Card.Text>
                </Card.Body>
        </Card>
    )
}