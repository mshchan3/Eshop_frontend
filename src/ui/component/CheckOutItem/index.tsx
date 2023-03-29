import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import {TransactionItem} from "../../../data/TransactionData";

type Props = {
    transactionItem: TransactionItem;
}
export default function CheckOutItem(props: Props){
    return (
        <tr>
            <td className="d-flex gap-4" style={{width: "100%"}}>
                <div className="d-flex justify-content-center align-items-center">
                    <img
                        src={props.transactionItem.product.imageUrl}
                        style={{width: "110px", height: "80px"}}/>
                </div>
                <div className="d-flex flex-column w-100">
                    <div className="d-flex justify-content-between">
                        <p>{props.transactionItem.product.name}</p>
                        <Button style={{backgroundColor: "white", border: 0, paddingTop: 0}}>
                            <FontAwesomeIcon icon={solid("x")} style={{color: "#000000"}}/>
                        </Button>
                    </div>
                    <div className="d-flex gap-2 align-items-baseline">
                        <div style={{width: "50%"}}>
                            <p>HK$ {props.transactionItem.product.price}</p>
                        </div>
                        <div className="w-50">
                            <p>Size: US10</p>
                        </div>
                        <div className="d-flex justify-content-end w-100">
                            Quantity: {props.transactionItem.quantity}
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <p>SubTotal: HK$ {props.transactionItem.subTotal}</p>
                    </div>
                </div>
            </td>
        </tr>
    )
}