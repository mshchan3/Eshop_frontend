import {Link} from "react-router-dom";
import {Button, ButtonGroup, Container, Table} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import React, {useEffect, useState} from "react";
import {TransactionApi} from "../../../api/TransactionApi";
import {TransactionData} from "../../../data/TransactionData";
import TopNavBar from "../../component/TopNavBar";

export default function UserTransactionPage() {
    const [transactionList, setTransactionList] = useState<TransactionData[] | undefined>(undefined)
    const getAllTransaction = async () => {
        let response = await TransactionApi.getAllTransaction();
        setTransactionList(response)
    }

    useEffect(() => {
        getAllTransaction()
    }, [])
    const renderTableContent = (data: TransactionData) => {
        return (
            <tr>
                <td className="d-flex gap-4" style={{width: "100%"}}>
                    {/*<div className="d-flex justify-content-center align-items-center">*/}
                    {/*    <Link to={`/product/${props.cartItem.pid}`}>*/}
                    {/*        <img src={props.cartItem.image_url} style={{width: "125px", height: "90px"}}/>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                    <div className="d-flex flex-column w-100">
                        <div className="d-flex justify-content-between">
                            <h4>{data.tid}</h4>
                        </div>
                        <div className="d-flex gap-2 align-items-baseline">
                            <div className="w-25">
                                <p>Total Amount: HK$ {data.total}</p>
                            </div>
                            <div className="w-25">
                                <p>Status: {data.status}</p>
                            </div>
                            <div className="d-flex justify-content-end w-100">
                            </div>
                            <div className="d-flex justify-content-end">
                                <p>{data.datetime}</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        )
    }

    return (
        <div>
            <TopNavBar/>
            <Container>
                <Table>
                    <tbody>
                    {
                        transactionList?.map((data) => {
                            return renderTableContent(data);
                        })
                    }
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}