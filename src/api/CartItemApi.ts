import FirebaseAuthService from "../authService/FirebaseAuthService";
import axios from "axios";
import {CartItemData} from "../data/CartItemData";
import {Simulate} from "react-dom/test-utils";
import {CartItemStatusData} from "../data/CartItemStatusData";

export namespace CartItemApi{
    const baseUrl = "http://localhost:8080"

    export async function getAllCartItem(){
        const accessToken = await FirebaseAuthService.getAccessToken();
        if (accessToken){
            const config = {headers: {Authorization: `Bearer ${accessToken}`}}
            try {
                const response = await axios.get<CartItemData[]>(`${baseUrl}/cart`, config);
                return response.data
            } catch (err) {
                console.log(err)
            }
        } else {
            throw new Error("Have not Logged In");
        }
    }

    export async function addCartItem(pid: string, quantity: string){
        const accessToken = await FirebaseAuthService.getAccessToken();
        if (accessToken){
            const config = {headers: {Authorization: `Bearer ${accessToken}`}}
            try {
                const response = await axios.put<CartItemStatusData>(`${baseUrl}/cart/${pid}/${quantity}`,{}, config);
                console.log(response.data)
                return response.data
            } catch (err) {
                console.error("Cannot add cart item")
            }
        } else {
            throw new Error("Have not Logged In");
        }
    }

    export async function updateCartItem(pid: string, quantity: string){
        const accessToken = await FirebaseAuthService.getAccessToken();
        if (accessToken){
            const config = {headers: {Authorization: `Bearer ${accessToken}`}}
            try {
                const response = await axios.patch<CartItemData>(`${baseUrl}/cart/${pid}/${quantity}`,{}, config);
                console.log(response.data)
                return response.data
            } catch (err) {
                console.error("Cannot add cart item")
            }
        } else {
            throw new Error("Have not Logged In");
        }
    }

    export async function deleteCartItem(pid: string){
        const accessToken = await FirebaseAuthService.getAccessToken();
        if (accessToken){
            const config = {headers: {Authorization: `Bearer ${accessToken}`}}
            try {
                const response = await axios.delete<CartItemData>(`${baseUrl}/cart/${pid}`, config);
                console.log(response.data)
                return response.data
            } catch (err) {
                console.error("Cannot delete cart item")
            }
        } else {
            throw new Error("Have not Logged In");
        }
    }
}