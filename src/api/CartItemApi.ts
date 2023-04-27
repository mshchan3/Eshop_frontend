import FirebaseAuthService from "../authService/FirebaseAuthService";
import axios from "axios";
import {CartItemData} from "../data/CartItemData";
import {CartItemStatusData} from "../data/CartItemStatusData";
import getEnvConfig from "../config/Config";

export namespace CartItemApi {
    const baseUrl = getEnvConfig().baseUrl

    export async function getAllCartItem() {
        try {
            const accessToken = await FirebaseAuthService.getAccessToken();
            if (!accessToken) {
                throw new Error("Have not Logged In");
            }
            const config = {headers: {Authorization: `Bearer ${accessToken}`}}
            const response = await axios.get<CartItemData[]>(`${baseUrl}/cart`, config);
            return response.data

        } catch (error) {
            throw error
        }
    }

    export async function addCartItem(pid: string, quantity: string) {
        try {
            const accessToken = await FirebaseAuthService.getAccessToken();
            if (!accessToken) {
                throw new Error("Have not Logged In");
            }
            const config = {headers: {Authorization: `Bearer ${accessToken}`}}
            const response = await axios.put<CartItemStatusData>(`${baseUrl}/cart/${pid}/${quantity}`, {}, config);
            return response.data
        } catch (error) {
            throw error
        }
    }

    export async function updateCartItem(pid: string, quantity: string) {
        try {
            const accessToken = await FirebaseAuthService.getAccessToken();
            if (!accessToken) {
                throw new Error("Have not Logged In");
            }
            const config = {headers: {Authorization: `Bearer ${accessToken}`}}
            const response = await axios.patch<CartItemData>(`${baseUrl}/cart/${pid}/${quantity}`, {}, config);
            return response.data
        } catch (error) {
            throw error
        }
    }

    export async function deleteCartItem(pid: string) {
        try {
            const accessToken = await FirebaseAuthService.getAccessToken();
            if (!accessToken) {
                throw new Error("Have not Logged In");
            }
            const config = {headers: {Authorization: `Bearer ${accessToken}`}}
            const response = await axios.delete<CartItemData>(`${baseUrl}/cart/${pid}`, config);
            return response.data
        } catch (error) {
            throw error
        }
    }
}