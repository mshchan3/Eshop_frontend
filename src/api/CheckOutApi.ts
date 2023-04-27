import FirebaseAuthService from "../authService/FirebaseAuthService";
import axios from "axios";
import {TransactionData} from "../data/TransactionData";
import getEnvConfig from "../config/Config";

export namespace CheckOutApi {
    const baseUrl = getEnvConfig().baseUrl
    export async function checkOut(tid:number){
        try {
            const accessToken = await FirebaseAuthService.getAccessToken();
            if (!accessToken) {
                throw new Error();
            }
            const config = {headers: {Authorization: `Bearer ${accessToken}`}}
            const response = await axios.post(`${baseUrl}/create-checkout-session/${tid}`, {}, config);
            return response.data
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}