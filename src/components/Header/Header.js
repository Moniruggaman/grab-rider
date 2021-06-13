import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {

    const history = useHistory();

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand className="d-inline-block align-top">
                    <Link to="/home">
                        <img width="100px" height="auto" className="img-responsive" src={logo} alt="logo" />
                    </Link>
                    Grab Riders
                </Navbar.Brand>
               
                <Nav className="me-auto">
                    <Nav.Link onClick={() => history.push('/home')}>Home</Nav.Link>
                    <Nav.Link onClick={() => history.push('/destination')}>Destination</Nav.Link>
                    <Nav.Link onClick={() => history.push('/blog')}>Blog</Nav.Link>
                    <Nav.Link onClick={() => history.push('/contact')}>Contact</Nav.Link>
                    <Button onClick={() => history.push('/login')}>Login</Button> 
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;