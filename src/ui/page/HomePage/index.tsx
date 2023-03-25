import TopNavBar from "../../component/TopNavBar";
import ProductCardGroup from "../../component/ProductCardGroup";
import {useEffect, useState} from "react";
import {ProductApi} from "../../../api/ProductApi";
import './style.css'
import {ProductDataHasStock} from "../../../data/ProductDataHasStock";
import HomePageCarousel from "../../component/HomePageCarousel";

export default function HomePage() {
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
        <TopNavBar/>
        <HomePageCarousel/>
        <ProductCardGroup productDataList={productDataList} searchProductName={searchProductName} searchCategory={undefined}/>
    </div>)
}