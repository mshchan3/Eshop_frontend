import FirebaseAuthService from "../authService/FirebaseAuthService";
import axios from "axios";
import {CartItemData} from "../data/CartItemData";
import {Simulate} from "react-dom/test-utils";

export namespace CartItemApi{
    import error = Simulate.error;
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
}