import React, {useEffect, useState} from "react";
import TopNavBar from "../../component/TopNavBar";
import './style.css'
import {ProductData} from "../../../data/ProductData";
import {ProductApi} from "../../../api/ProductApi";
import {useNavigate, useParams} from "react-router-dom";
import LoadingSpinner from "../../component/LoadingSpinner";
import ProductDetailContainer from "../../component/ProductDetailContainer";
import ProductDetailContainerWithoutStock from "../../component/ProductDetailContainerWithoutStock";
import {Breadcrumb} from "react-bootstrap";
import Footer from "../../component/Footer";

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
        } else if (productData && productData.stock < 1) {
            return <ProductDetailContainerWithoutStock productData={productData}/>
        } else if (productData === undefined) {
            return <LoadingSpinner/>
        }
    }

    return (
        <div>
            <TopNavBar/>
            <nav aria-label="breadcrumb" style={{marginTop: "12px", marginLeft: "36px"}}>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a style={{color: "darkgreen"}} href="/">Home</a></li>
                    <li className="breadcrumb-item"><a style={{color: "darkgreen"}} href="/#/product">Product</a></li>
                    <li className="breadcrumb-item"><a style={{color: "darkgreen"}} href={`/#/search-category/${productData?.category}`}>{productData?.category}</a></li>
                    <li className="breadcrumb-item active">{productData?.name}</li>
                </ol>
            </nav>
            {
                renderProductDetailContainer()
            }
            <Footer/>
        </div>
    )

}