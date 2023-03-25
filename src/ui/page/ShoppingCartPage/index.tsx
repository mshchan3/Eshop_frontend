import TopNavBar from "../../component/TopNavBar";
import {Container} from "react-bootstrap";
import ShoppingCart from "../../component/ShoppingCart";
import {useEffect, useState} from "react";
import {CartItemData} from "../../../data/CartItemData";
import {CartItemApi} from "../../../api/CartItemApi";
import {useNavigate} from "react-router-dom";

export default function ShoppingCartPage(){
    const [cartItemList, setCartItemList] = useState<CartItemData[] | null | undefined>(undefined)
    const natvigate = useNavigate()
    const updateCartItemList = async () => {
        try {
            const response = await CartItemApi.getAllCartItem()
            console.log(response)
        } catch (err){
            natvigate("/login")
        }
    }

    useEffect(() => {
        updateCartItemList();
    },[])

    return(
        <div>
            <TopNavBar/>
            <Container>
                <ShoppingCart/>
            </Container>
        </div>
    )
}