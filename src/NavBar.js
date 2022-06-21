import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><b>Alex Cooksey</b></Navbar.Brand>
                <Nav align="end" className="ml-auto">
                    <Nav.Link style={{ color: "white" }} href="/"><b>Home</b></Nav.Link>
                    <Nav.Link style={{ color: "white" }} href="/Projects"><b>Projects</b></Nav.Link>
                    <Nav.Link style={{ color: "white" }} href="/bio"><b>Bio</b></Nav.Link>
                    {/* <Nav.Link style={{ color: "white" }} href="/Contact"><b>Contact</b></Nav.Link> */}
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar