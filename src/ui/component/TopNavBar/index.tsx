import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css'
import {Button, Form} from "react-bootstrap";
import React, {FormEvent, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {Link, useNavigate} from "react-router-dom";

type Props = {
    setSearchProductName: (searchProductName:string) => void;
}


export default function TopNavBar(props:Props) {
    const navigate = useNavigate();
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const form = event.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        props.setSearchProductName(formData.get("search-product") as string);
    }
    return (
        <Navbar bg="light" expand="lg" id={"navbar-box"} sticky="top">
            <Container>
                <a href={"http://localhost:3000/"}><img
                    src="https://live.staticflickr.com/65535/52763649100_2c6c38fa2b_b.jpg" id={"logo"}/></a>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Browse" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="">News</Nav.Link>
                        <Nav.Link href="">Help</Nav.Link>
                        <Form className="d-flex" onSubmit={(event) => {handleSubmit(event)}}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                name="search-product"
                            />
                            <Button type="submit" variant="outline-success">
                                <FontAwesomeIcon icon={solid("magnifying-glass")} style={{color: "#065700"}} />
                            </Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
                <div className={"login-box"}>
                    <Link to="/login">
                    <Button variant={"outline-success"}>Login</Button>
                    </Link>
                </div>
            </Container>
        </Navbar>
    )
}