import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css'
import {Button, Form} from "react-bootstrap";
import React, {FormEvent, SyntheticEvent, useContext, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {regular, solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {Link, useNavigate} from "react-router-dom";
import {userContext} from "../../../App";
import FirebaseAuthService from "../../../authService/FirebaseAuthService";


export default function TopNavBar() {
    const user = useContext(userContext)
    const navigate = useNavigate();
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const form = event.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        const targetValue = formData.get("search-product") as string;
        navigate(`/search/${targetValue}`)
    }

    const handleSelect = (selectedKey: string | null) => {
        navigate(`/search-category/${selectedKey}`)
    }

    const handleLogout = async () => {
        await FirebaseAuthService.handleSignOut();
        navigate("/");
    }

    const renderLoginPannel = () => {
        if (user) {
            return (<div>
                    <Link to="/transaction-record">
                        <p>{user.email}</p>
                        <Button variant={"outline-success"}
                                onClick={handleLogout}
                                style={{borderRadius: 0}}>Logout</Button>
                    </Link>
                </div>
            )
        } else {
            return (
                <Link to="/login">
                    <Button variant={"outline-success"} style={{borderRadius: 0}}>Login</Button>
                </Link>
            )
        }
    }


    return (
        <Navbar bg="white" expand="lg" id={"navbar-box"} sticky="top">
            <Container>
                <a href={"/"}><img
                    src="http://media-s3-us-east-1.ceros.com/hype-beast/images/2017/02/15/4acf1d42699e3a5fd757705095f48a4c/nike-sb-heinekin.png"
                    id={"logo"}/></a>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Category" id="basic-nav-dropdown" onSelect={handleSelect}>
                            <NavDropdown.Item eventKey="Trainers">Trainers</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Basketball Shoes">Basketball Shoes</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Slide">Slide</NavDropdown.Item>
                            {/*<NavDropdown.Divider/>*/}
                            {/*<NavDropdown.Item href="#action/3.4">*/}
                            {/*    Separated link*/}
                            {/*</NavDropdown.Item>*/}
                        </NavDropdown>
                        <Nav.Link href="/#/product">Product</Nav.Link>
                        <Form className="d-flex" style={{width: "30vw"}}
                              onSubmit={(event) => {
                                  handleSubmit(event)
                              }}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                name="search-product"
                                size="sm"
                                style={{borderRadius: 0}}
                            />
                            <Button type="submit" variant="outline-success" style={{borderRadius: 0}}>
                                <FontAwesomeIcon icon={solid("magnifying-glass")}
                                                 style={{color: "#1f5129"}}/>
                            </Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
                <Link to="/shopping-cart">
                    <Button className="me-2" variant="outline-success" style={{border: "white", borderRadius: 0}}>
                        <FontAwesomeIcon icon={solid("cart-shopping")} style={{color: "#1f5129",}}/>
                    </Button>
                </Link>
                <div className={"login-box"} style={{color: "#1f5129"}}>
                    {
                        renderLoginPannel()
                    }
                </div>
            </Container>
        </Navbar>
    )
}