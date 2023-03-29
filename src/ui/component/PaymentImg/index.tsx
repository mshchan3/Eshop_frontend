import {Container} from "react-bootstrap";

export default function PaymentImg() {
    return (
        <div>
            <Container id={"footer-container"} className="d-flex justify-content-center mt-3">
                <div>
                    <img className={"payment-logo"} height="40"
                         src="https://shoplineimg.com/assets/footer/card_visa.png"/>
                </div>
                <div>
                    <img className={"payment-logo"} height="40"
                         src="https://shoplineimg.com/assets/footer/card_master.png"/>
                </div>
                <div>
                    <img className={"payment-logo"} height="40"
                         src="https://shoplineimg.com/assets/footer/card_unionpay.png"/>
                </div>
                <div>
                    <img className={"payment-logo"} height="40"
                         src="https://img.shoplineapp.com/media/image_clips/62943ef1121e54002161a747/original.png"/>
                </div>
                <div>
                    <img className={"payment-logo"} height="40"
                         src="https://shoplineimg.com/assets/footer/card_apple_pay_with_border.png"/>
                </div>
                <div>
                    <img className={"payment-logo"} height="40"
                         src="https://img.shoplineapp.com/media/image_clips/628f11d6b4a1c700152935da/original.png"/>
                </div>
            </Container>
            <div className="d-flex justify-content-center">
                2023 © STOCK X
            </div>
        </div>
    )
}