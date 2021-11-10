import React, { Component } from "react";
import { Container, Navbar } from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <Navbar bg="light">
                <Container fluid>
                    <Navbar.Brand href="#">React DND Editor</Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}

export default Header;