import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Card, Container, FormText} from "react-bootstrap";
import TopNavBar from "../../component/TopNavBar";
import React, {useState} from "react";
import FirebaseAuthService from "../../../authService/FirebaseAuthService";
import {useNavigate} from "react-router-dom";
import {FacebookLoginButton, GoogleLoginButton} from "react-social-login-buttons";

export default function LoginPage() {
    const natvigate = useNavigate();

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [isLoginFailed, setIsLoginFailed] = useState<boolean>(false)

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
    }

    const handleGoogleLogin = async() => {
        let loginResult = await FirebaseAuthService.handleSignInWithGoogle();
        if (loginResult){
            natvigate(-1)
        }
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let loginResult = await FirebaseAuthService.handleSignInWithEmailAndPassword(email,password);
        if (loginResult){
            natvigate(-1);
        } else {
            setIsLoginFailed(true);
        }
    }

    return (
        <div>
            <TopNavBar/>
            <Container className={"d-flex justify-content-center align-items-center"} style={{height: "70vh"}}>
                <Card style={{width: "400px", borderRadius: 0}}>
                    <Card.Header className={"d-flex justify-content-center bg-white p-3"}>
                        <h5 style={{marginBottom: 0, textDecorationLine: "underline"}}>Log In</h5>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className={"mb-3 form-floating"} controlId="formBasicEmail">
                                <Form.Control type="email"
                                              placeholder="Email Address"
                                              onChange={handleEmailChange}
                                              value={email}
                                              style={{borderRadius: 0}}/>
                                <Form.Label>Email address</Form.Label>
                            </Form.Group>
                            <Form.Group className={"mb-3 form-floating"} controlId="formBasicPassword">
                                <Form.Control type="password"
                                              placeholder="Password"
                                              onChange={handlePasswordChange}
                                              value={password}
                                              style={{borderRadius: 0}}
                                />
                                <Form.Label>Password</Form.Label>
                            </Form.Group>
                            {
                                isLoginFailed &&
                                <FormText style={{color: "red"}}>
                                    Login Failed! Please check your email and password!
                                </FormText>
                            }
                            <Button variant="dark" type="submit" style={{width: "100%", padding: "3%", border: "black 1px solid" ,borderRadius: 0}}>
                                Log In
                            </Button>
                            <p style={{fontSize: "x-small", marginTop: "4px", textAlign: "center"}}>By logging in, you agree to the Terms of Service and
                                Privacy Policy</p>
                            <GoogleLoginButton onClick={handleGoogleLogin} style={{paddingLeft: "20%", borderRadius: 0, marginTop: "12px"}}/>
                            <FacebookLoginButton onClick={() => alert("Hello")} style={{paddingLeft: "17.5%", borderRadius: 0, marginTop: "12px"}} />
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}