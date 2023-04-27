import {ProductData} from "../data/ProductData";
import axios, {AxiosResponse} from "axios";
import {Simulate} from "react-dom/test-utils";
import {ProductDataHasStock} from "../data/ProductDataHasStock";
import getEnvConfig from "../config/Config";

export namespace ProductApi {
    const baseUrl = getEnvConfig().baseUrl

    export async function fetchAllProductData():Promise<ProductDataHasStock[]> {
        try {
            let response = await axios.get<ProductDataHasStock[]>(`${baseUrl}/public/product`)
            return response.data;
        } catch (err) {
            console.error(err)
            throw err;
        }
    }

    export async function fetchProductDataById(pid: string | undefined): Promise<ProductData> {
        try {
            let response = await axios.get<ProductData>(`${baseUrl}/public/product/${pid}`)
            return response.data;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}