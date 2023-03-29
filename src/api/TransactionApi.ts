import FirebaseAuthService from "../authService/FirebaseAuthService";
import axios from "axios";
import {CartItemData} from "../data/CartItemData";
import {CartItemStatusData} from "../data/CartItemStatusData";
import {TransactionData} from "../data/TransactionData";

export namespace TransactionApi {
    const baseUrl = "http://localhost:8080"

    export async function createTransaction() {
        try {
            const accessToken = await FirebaseAuthService.getAccessToken();
            if (!accessToken) {
                throw new Error();
            }
            const config = {headers: {Authorization: `Bearer ${accessToken}`}}
            const response = await axios.post<TransactionData>(`${baseUrl}/transaction/prepare`, {}, config);
            return response.data

        } catch (error) {
            throw error
        }
    }

    export async function getTransactionById(tid:number) {
        try {
            const accessToken = await FirebaseAuthService.getAccessToken();
            if (!accessToken) {
                throw new Error();
            }
            const config = {headers: {Authorization: `Bearer ${accessToken}`}}
            const response = await axios.get<TransactionData>(`${baseUrl}/transaction/${tid}`, config);
            return response.data
        } catch (error) {
            throw error
        }
    }

    export async function payTransaction(tid: number) {
        try {
            const accessToken = await FirebaseAuthService.getAccessToken();
            if (!accessToken) {
                throw new Error();
            }
            const config = {headers: {Authorization: `Bearer ${accessToken}`}}
            const response = await axios.patch<TransactionData>(`${baseUrl}/transaction/${tid}/pay`, {}, config);
            return response.data

        } catch (error) {
            throw error
        }
    }
    export async function finishTransaction(tid:number) {
        try {
            const accessToken = await FirebaseAuthService.getAccessToken();
            if (!accessToken) {
                throw new Error();
            }
            const config = {headers: {Authorization: `Bearer ${accessToken}`}}
            const response = await axios.patch<TransactionData>(`${baseUrl}/transaction/${tid}/finish`, {}, config);
            return response.data

        } catch (error) {
            throw error
        }
    }
}