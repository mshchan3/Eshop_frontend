import {Button, Card} from "react-bootstrap";
import TopNavBar from "../../component/TopNavBar";
import {useNavigate} from "react-router-dom";

export default function PaymentSuccessPage() {
    const natvigate = useNavigate();

    return (
        <div>
            <TopNavBar/>
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "75vh"
        }}>
            <Card className="shadow" style={{width: "400px", height: "450px", padding: "24px"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <h2 style={{color: "#21BE54"}}>Payment Successful!!</h2>
                    <Card.Img src={"https://live.staticflickr.com/65535/52777084210_c52ba57a6a_o.png"}
                              style={{height: "96px", width: "96px"}}/>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <Card.Text>Payment Type</Card.Text>
                        <Card.Text>Visa/Master</Card.Text>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <Card.Text>Mobile Number</Card.Text>
                        <Card.Text>88971314</Card.Text>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <Card.Text>Email</Card.Text>
                        <Card.Text>user@user.com</Card.Text>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <Card.Text>Amount Paid</Card.Text>
                        <Card.Text>HKD$12345</Card.Text>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <Card.Text>Transaction ID</Card.Text>
                        <Card.Text>123456789</Card.Text>
                    </div>
                </div>
                <Button style={{backgroundColor: "darkgreen", border: "darkgreen"}}
                        onClick={() => {natvigate("/")}
                }>Back to Home</Button>
            </Card>
        </div>
        </div>
    )
}