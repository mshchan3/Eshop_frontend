import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function LoginForm() {
    return (
        <Form>
            <Form.Group className={"mb-3 form-floating"} controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email Address" id="email-address"/>
                <Form.Label for={"email-address"}>Email address</Form.Label>
            </Form.Group>
            <Form.Group className={"mb-3 form-floating"} controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" id="password"/>
                <Form.Label for={"password"}>Password</Form.Label>
            </Form.Group>
            <Button variant="dark" type="submit" style={{width: "100%", padding: "3%"}}>
                Log In
            </Button>
            <p style={{fontSize: "x-small", marginTop: "4px"}}>By logging in, you agree to the Terms of Service and
                Privacy Policy</p>
            <Button variant="outline-dark" type="submit" style={{width: "100%", padding: "3%", marginBottom: "12px"}}>
                Continue with Google
            </Button>
            <Button variant="outline-dark" type="submit" style={{width: "100%", padding: "3%", marginBottom: "12px"}}>
                Continue with Facebook
            </Button>
        </Form>
    )
}