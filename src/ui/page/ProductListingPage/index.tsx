import TopNavBar from "../../component/TopNavBar";
import ProductCardGroup from "../../component/ProductCardGroup";
import {useEffect, useState} from "react";
import {ProductData} from "../../../data/ProductData";
import {ProductApi} from "../../../api/ProductApi";
import './style.css'
import {useParams} from "react-router-dom";
import {ProductDataHasStock} from "../../../data/ProductDataHasStock";

export default function ProductListingPage() {
    const [productDataList, setProductData] = useState<ProductDataHasStock[]|undefined>(undefined);
    const [searchProductName, setSearchProductName] = useState("");

    const updateProductDataList = async () => {
        const response = await ProductApi.fetchAllProductData();
        setProductData(response);
    }

    useEffect(() => {
        updateProductDataList();
    },[searchProductName])



    return(<div>
        <TopNavBar setSearchProductName={setSearchProductName}/>
        <ProductCardGroup productDataList={productDataList} searchProductName={searchProductName}/>
    </div>)
}