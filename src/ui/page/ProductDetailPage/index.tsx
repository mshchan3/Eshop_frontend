import React, {useEffect, useState} from "react";
import TopNavBar from "../../component/TopNavBar";
import './style.css'
import {ProductData} from "../../../data/ProductData";
import {ProductApi} from "../../../api/ProductApi";
import {useNavigate, useParams} from "react-router-dom";
import LoadingSpinner from "../../component/LoadingSpinner";
import ProductDetailContainer from "../../component/ProductDetailContainer";
import ProductDetailContainerWithoutStock from "../../component/ProductDetailContainerWithoutStock";

type Params = {
    productId: string
}

export default function ProductDetailPage() {
    const [productData, setProductData] = useState<ProductData | undefined>(undefined)
    const params = useParams<Params>();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1)
    const updateProductData = async () => {
        try {
            const response = await ProductApi.fetchProductDataById(params.productId);
            setProductData(response);
        } catch (err) {
            navigate("/*")
        }
    }

    useEffect(() => {
        updateProductData();
    }, [params.productId])

    let renderProductDetailContainer = () => {
        if (productData && productData.stock > 0) {
            return <ProductDetailContainer productData={productData} quantity={quantity} setQuantity={setQuantity}/>
        } else if (productData && productData.stock < 1){
            return <ProductDetailContainerWithoutStock productData={productData}/>
        } else if (productData === undefined) {
            return <LoadingSpinner/>
        }
    }

    return (
        <div>
            <TopNavBar/>
            {
                renderProductDetailContainer()
            }
        </div>
    )

}