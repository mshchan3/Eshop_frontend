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

export default function SearchCategoryListingPage() {
    const [productDataList, setProductData] = useState<ProductDataHasStock[]|undefined>(undefined);
    const [searchCategory, setSearchCategory] = useState<string|undefined>(undefined);
    const params = useParams<Params>();

    //get product data list by API
    const updateProductDataList = async () => {
        const response = await ProductApi.fetchAllProductData();
        setProductData(response);
    }

    const updateSearchCategory = () => {
        if (params.category) {
            setSearchCategory(params.category)
        }
    }


    useEffect(() => {
        updateProductDataList();
        updateSearchCategory();
    },[params.category])




    return(<div>
        <TopNavBar/>
        <ProductCardGroup productDataList={productDataList} searchProductName={""} searchCategory={searchCategory}/>
    </div>)
}