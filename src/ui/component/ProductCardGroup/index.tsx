import Container from "react-bootstrap/Container";
import './style.css'
import ProductCard from "../ProductCard";
import {ProductData} from "../../../data/ProductData";
import LoadingSpinner from "../LoadingSpinner";
import {ProductDataHasStock} from "../../../data/ProductDataHasStock";

type Props = {
    productDataList: ProductDataHasStock[] | undefined,
    searchProductName: string
}

export default function ProductCardGroup(props: Props) {
    let renderProductCardGroup = () => {
        if (props.productDataList === undefined) {
            return <LoadingSpinner/>
        } else {
            return (
            props.productDataList?.map((value) => {
                if (value.name.toLowerCase().includes(props.searchProductName.toLowerCase()))
                    return<ProductCard productData={value} key={value.pid}/>
                })
            )
        }
    }

    return (
        <Container className={"product-card-group"}>
            {renderProductCardGroup()}
        </Container>
    )
}