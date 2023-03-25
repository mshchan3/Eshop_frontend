import {Button, Form, InputGroup} from "react-bootstrap";

export default function OrderSummary() {
    return (
        <div className="d-flex flex-column">
            <div className="order-summary-header">
                <p>Order Summary:</p>
                <p>Number of Total Items</p>
            </div>
            <div className="order-summary-details">
                <div>
                    <p>Product Total</p>
                    <p>HK$1234</p>
                </div>
                <div>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Enter Promo Code"
                            aria-label="Enter Promo Code"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-dark" id="button-addon2">
                            APPLY
                        </Button>
                    </InputGroup>
                </div>
                <div>
                    <p>Delivery</p>
                    <p>HK$0.00</p>
                </div>
                <div>
                    <p>Total</p>
                    <p>HK$1234</p>
                </div>
            </div>
            <div className="check-out-button">
                <Button variant="outline-dark">
                    MEMBER CHECKOUT
                </Button>
            </div>
            <div className="disclaimer-box">
                <h5>Disclaimer</h5>
                <p>
                    adidas reserves the right to cancel your order in certain circumstances without notice including,
                    but not limited to, out of stocks, quality issues, shipping issues, payment issues, customs
                    clearance issues and suspected reselling. Refunds of cancelled order will be issued back to your
                    original form of payment as soon as possible.
                </p>
            </div>
        </div>
    )
}