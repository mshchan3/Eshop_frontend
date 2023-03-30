import {Button, FloatingLabel, Form, FormControl} from "react-bootstrap";
import {TransactionApi} from "../../../api/TransactionApi";
import {useNavigate} from "react-router-dom";
import {CheckOutApi} from "../../../api/CheckOutApi";

type Props = {
    tid: number | undefined
}

export default function PaymentBox(props: Props) {
    const natvigate = useNavigate();

    // const handleOnclickPay = async () => {
    //     if (props.tid) {
    //         let response = await TransactionApi.payTransaction(props.tid)
    //         console.log(response)
    //         if (response) {
    //             let finishResponse = await TransactionApi.finishTransaction(props.tid)
    //             console.log(finishResponse)
    //             if(finishResponse) {
    //                 natvigate("/checkout/success")
    //             }
    //         }
    //     }
    // }
    const handleOnclickPay = async () => {
        if (props.tid) {
            if (await TransactionApi.payTransaction(props.tid)) {
                let response = await CheckOutApi.checkOut(props.tid)
                window.location.replace(response)
            }
        }
    }

    return (
        <div className="d-flex flex-column" style={{width: "60%", padding: "24px"}}>
            <div style={{display: "flex", backgroundColor: "#EAEAEA", padding: "12px"}}>
                <h3 style={{marginBottom: 0}}>SHIPPING METHOD</h3>
            </div>
            <div className="d-flex flex-column" style={{margin: "24px 12px"}}>
                <h3>DELIVERY ADDRESS</h3>
                <div>
                    <Form className="row g-3">
                        <div className="col-md-6">
                            <FloatingLabel controlId="floatingInput" label="NAME" className="mb-1">
                                <Form.Control type="input" placeholder="NAME" style={{borderRadius: 0}}/>
                            </FloatingLabel>
                        </div>
                        <div className="col-md-6">
                            <FloatingLabel controlId="floatingInput" label="MOBILE NUMBER" className="mb-1">
                                <Form.Control type="input" size="sm" placeholder="MOBILE NUMBER"/>
                            </FloatingLabel>
                        </div>
                        <div className="col-md-4">
                            <FloatingLabel controlId="floatingInput" label="CITY" className="mb-1">
                                <Form.Control type="input" size="sm" placeholder="CITY"/>
                            </FloatingLabel>
                        </div>
                        <div className="col-md-4">
                            <FloatingLabel controlId="floatingInput" label="REGION" className="mb-1">
                                <Form.Control type="input" size="sm" placeholder="REGION"/>
                            </FloatingLabel>
                        </div>
                        <div className="col-md-4">
                            <FloatingLabel controlId="floatingInput" label="DISTRICT" className="mb-1">
                                <Form.Control type="input" size="sm" placeholder="DISTRICT"/>
                            </FloatingLabel>
                        </div>
                        <div className="col-12">
                            <FloatingLabel controlId="floatingInput" label="ADDRESS" className="mb-1">
                                <Form.Control type="input" size="sm" placeholder="ADDRESS"/>
                            </FloatingLabel>
                        </div>
                        <div className="col-12">
                            <FloatingLabel controlId="floatingInput" label="ADDRESS" className="mb-1">
                                <Form.Control type="input" size="sm" placeholder="ADDRESS"/>
                            </FloatingLabel>
                        </div>
                    </Form>
                </div>
                <div style={{
                    borderTop: "dotted 2px lightgray",
                    borderBottom: "dotted 2px lightgray",
                    backgroundColor: "#EAEAEA",
                    height: "68px",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "12px"
                }}>
                    <Form.Check
                        type="radio"
                        label="Standard Delivery： 1-5 business days Free"
                        id="Delivery Option"
                        defaultChecked={true}
                    />
                </div>
                <div className="d-flex flex-column">
                    <div style={{display: "flex", backgroundColor: "#EAEAEA", padding: "12px", margin: "24px 0"}}>
                        <h3>PAYMENT METHOD</h3>
                    </div>
                    <div style={{
                        borderTop: "dotted 2px lightgray",
                        borderBottom: "dotted 2px lightgray",
                        backgroundColor: "#EAEAEA",
                        height: "68px",
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "12px",
                        margin: "12px 0"
                    }}>
                        <Form.Check
                            type="radio"
                            label="VISA/MASTER"
                            id="Delivery Option"
                            defaultChecked={true}
                        />
                    </div>
                    <div>
                        <div>
                            <FloatingLabel controlId="floatingInput" label="CARDHOLDER'S NAME" className="mb-3">
                                <Form.Control type="input" size="sm" placeholder="CARD HOLDER NAME"/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="CARD NUMBER" className="mb-3">
                                <Form.Control type="input" size="sm" placeholder="CARD NUMBER"/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="EXPIRY DATE" className="mb-3">
                                <Form.Control type="input" size="sm" placeholder="EXPIRY DATE"/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="SECURITY CODE" className="mb-3">
                                <Form.Control type="input" size="sm" placeholder="CSV"/>
                            </FloatingLabel>
                            <Button onClick={handleOnclickPay}>
                                REVIEW AND PAY
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}