import TopNavBar from "../../component/TopNavBar";
import {Container} from "react-bootstrap";
import ShoppingCart from "../../component/ShoppingCart";
import {createContext, useContext, useEffect, useState} from "react";
import {CartItemData} from "../../../data/CartItemData";
import {CartItemApi} from "../../../api/CartItemApi";
import {useNavigate} from "react-router-dom";
import Footer from "../../component/Footer";



type CartItemContext = {
    updateCart: (cartItem: CartItemData) => void,
    deleteCart: (cartItemPid: number) => void
}
export const CartContext = createContext<CartItemContext | undefined>(undefined);

export default function ShoppingCartPage() {
    const [cartItemList, setCartItemList] = useState<CartItemData[] | undefined>(undefined)
    const natvigate = useNavigate();
    const updateCartItemList = async () => {
        try {
            const response = await CartItemApi.getAllCartItem()
            setCartItemList(response)
        } catch (err) {
            natvigate("/login")
        }
    }

    let updateCartItemListAfterPatch =
        {
            updateCart: (cartItemData: CartItemData) => {
                let updatedCartItemList = cartItemList?.map((cartItem) => {
                    if (cartItem.pid === cartItemData.pid) {
                        cartItem = cartItemData;
                    }
                    return cartItem;
                })
                if (updatedCartItemList) {
                    setCartItemList(updatedCartItemList)
                }
            },

            deleteCart: (cartItemPid: number) => {
                let updatedCartItemList = cartItemList?.filter((value) => {
                    console.log(value.pid,cartItemPid)
                    return value.pid !== cartItemPid
                })
                if (updatedCartItemList){
                    setCartItemList(updatedCartItemList)
                    console.log(updatedCartItemList)
                }
            }
        }




    useEffect(() => {
        updateCartItemList();
    }, [])

    return (
        <CartContext.Provider value={updateCartItemListAfterPatch}>
            <div>
                <TopNavBar/>
                <Container>
                    <ShoppingCart cartItemList={cartItemList}/>
                </Container>
                <Footer/>
            </div>
        </CartContext.Provider>
    )
}