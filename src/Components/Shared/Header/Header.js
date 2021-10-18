import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const {user, logOut} =useAuth();
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="ms-auto">
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/doctors">DOCTORS</NavLink>
                </Nav>
                {
                    user?.email ?
                    <button onClick={logOut} className="btn btn-primary">logout</button>
                    :
                    <Link to="/login">
                    <button className="btn btn-primary">login</button>
                    </Link>
                }
                <span className="me-3">or</span>
                <Link to="/signup">Sign-up</Link>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;