import React from 'react';
import "bootswatch/dist/lumen/bootstrap.min.css";
import { Navbar, Nav} from "react-bootstrap"

function Navigation () {
    return (
        <div>
            <Navbar bg="primary" expand="lg" variant="dark">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/Website/">Trend #1</Nav.Link>
                    <Nav.Link href="/Website/#/Trend2">Trend #2</Nav.Link>
                    <Nav.Link href="/Website/#/Trend3">Trend #3</Nav.Link>
                    <Nav.Link href="/Website/#/Trend4">Trend #4</Nav.Link>
                    <Nav.Link href="/Website/#/Trend5">Trend #5</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </div>
    )
}

export default Navigation


