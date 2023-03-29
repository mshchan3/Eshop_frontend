import TopNavBar from "../../component/TopNavBar";
import ProductCardGroup from "../../component/ProductCardGroup";
import React, {useEffect, useState} from "react";
import {ProductDataHasStock} from "../../../data/ProductDataHasStock";
import {ProductApi} from "../../../api/ProductApi";
import Footer from "../../component/Footer";

export default function ProductListingPage() {
    const [productDataList, setProductData] = useState<ProductDataHasStock[]|undefined>(undefined);
    const [searchProductName, setSearchProductName] = useState("");
    //get product data list by API
    const updateProductDataList = async () => {
        const response = await ProductApi.fetchAllProductData();
        setProductData(response);
    }

    useEffect(() => {
        updateProductDataList();
    },[])

    return(<div>
        <TopNavBar/>
        <nav aria-label="breadcrumb" style={{marginTop: "12px", marginLeft: "36px"}}>
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a style={{color: "darkgreen"}} href="/">Home</a></li>
                <li className="breadcrumb-item active">Product</li>
            </ol>
        </nav>
        <ProductCardGroup productDataList={productDataList} searchProductName={searchProductName} searchCategory={undefined}/>
        <Footer/>
    </div>)
}