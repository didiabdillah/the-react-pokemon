import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Navbar, Nav, Container } from 'react-bootstrap';

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export default class NavbarSection extends Component {
    render() {
        return (
            <>
             <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#">The React Pokemon <i className='fab fa-typo3 px-2' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#/">Pokemon List</Nav.Link>
                        <Nav.Link href="#/mypokemon">My Pokemon</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </>
        )
    }
}
