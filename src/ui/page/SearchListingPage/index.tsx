import TopNavBar from "../../component/TopNavBar";
import ProductCardGroup from "../../component/ProductCardGroup";
import {useEffect, useState} from "react";
import {ProductApi} from "../../../api/ProductApi";
import './style.css'
import {ProductDataHasStock} from "../../../data/ProductDataHasStock";
import {useParams} from "react-router-dom";

type Params = {
    productName: string,
    category: string
}

export default function SearchListingPage() {
    const [productDataList, setProductData] = useState<ProductDataHasStock[]|undefined>(undefined);
    const [searchProductName, setSearchProductName] = useState("");
    const params = useParams<Params>();

    //get product data list by API
    const updateProductDataList = async () => {
        const response = await ProductApi.fetchAllProductData();
        setProductData(response);
    }

    const updateSearchProductName = () => {
        if (params.productName) {
            setSearchProductName(params.productName)
        }
    }


    useEffect(() => {
        updateProductDataList();
        updateSearchProductName();
    },[params.productName])




    return(<div>
        <TopNavBar/>
        <ProductCardGroup productDataList={productDataList} searchProductName={searchProductName} searchCategory={undefined}/>
    </div>)
}