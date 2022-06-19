import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><b>Alex Cooksey</b></Navbar.Brand>
                <Nav align="end" className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Projects">Projects</Nav.Link>
                    <Nav.Link href="/bio">Bio</Nav.Link>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar