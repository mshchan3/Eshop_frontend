import TopNavBar from "../../component/TopNavBar";
import {Container} from "react-bootstrap";
import PaymentBox from "../../component/PaymentBox";
import CheckOutSummary from "../../component/CheckOutSummary";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {TransactionData} from "../../../data/TransactionData";
import {TransactionApi} from "../../../api/TransactionApi";
import Footer from "../../component/Footer";

export default function CheckOutPage(){
    const transactionDataAfterCreate = useLocation();
    const [transactionData, setTransactionData] = useState<TransactionData | undefined>(undefined);

    const updateTransactionData = async () => {
        let response = await TransactionApi.getTransactionById(transactionDataAfterCreate.state)
        setTransactionData(response)
    }

    useEffect(() => {
        updateTransactionData();
    },[])

    return(
        <div>
            <TopNavBar/>
            <Container className="d-flex">
                <PaymentBox tid={transactionData?.tid}/>
                <CheckOutSummary transactionData={transactionData}/>
            </Container>
            <Footer/>
        </div>
    )
}