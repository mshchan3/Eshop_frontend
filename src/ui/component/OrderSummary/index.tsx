import {Button, Form, InputGroup} from "react-bootstrap";
import {CartItemData} from "../../../data/CartItemData";

type Props = {
    cartItemList: CartItemData[] | null | undefined;
}
export default function OrderSummary(props: Props) {
    const getTotalQuantity = () => {
        let totalQuantity: number = 0;
        props.cartItemList?.map((value) => {
            totalQuantity += value.cart_quantity
        })
        return totalQuantity;
    }

    const getTotalPrice = () => {
        let totalPrice: number = 0;
        props.cartItemList?.map((value) => {
            totalPrice += (value.cart_quantity * value.price)
        })
        return totalPrice;
    }

    return (
        <div className="d-flex flex-column p-2" style={{backgroundColor: "#EAEAEA"}}>
            <div className="d-flex gap-2 align-items-baseline">
                <h5>Order Summary:</h5>
                <p>{getTotalQuantity()}Items</p>
            </div>
            <div>
                <div className={"d-flex flex-column bg-white p-2"}>
                    <div className="d-flex justify-content-between">
                        <p>Product Total</p>
                        <p><b>HK${getTotalPrice()}</b></p>
                    </div>
                    <div>
                        <h5 style={{textDecorationLine: "underline"}}>PROMO CODE</h5>
                        <p style={{fontSize: "small", color: "grey"}}>coupons can only be used if the entire order
                            is regular-price items.</p>
                    </div>
                    <div>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Enter Promo Code"
                                aria-label="Enter Promo Code"
                                aria-describedby="basic-addon2"
                                style={{borderRadius: 0}}
                            />
                            <Button variant="outline-dark" id="button-addon2" style={{borderRadius: 0}}>
                                APPLY
                            </Button>
                        </InputGroup>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Delivery</p>
                        <p>HK$0.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Total</p>
                        <p>HK${getTotalPrice()}</p>
                    </div>
                </div>
            </div>
            <div className="check-out-button mt-3 mb-3">
                <Button variant="outline-dark" style={{borderRadius: 0, width: "100%"}}>
                    MEMBER CHECKOUT
                </Button>
            </div>
            <div className="disclaimer-box">
                <h6>Disclaimer</h6>
                <p style={{fontSize: "x-small"}}>
                    StockX reserves the right to cancel your order in certain circumstances without notice including,
                    but not limited to, out of stocks, quality issues, shipping issues, payment issues, customs
                    clearance issues and suspected reselling. Refunds of cancelled order will be issued back to your
                    original form of payment as soon as possible.
                </p>
            </div>
        </div>
    )
}