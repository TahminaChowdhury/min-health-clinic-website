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
                <i class="fas fa-brain icon"></i> 
                <Navbar.Brand className="fw-bold">
                MIND HEALTH <br /> CLINIC</Navbar.Brand>
                <Nav className="ms-auto fw-bold">
                <NavLink to="/home">HOME</NavLink>
                <NavLink to="/aboutus">ABOUT US </NavLink>
                <NavLink to="/doctors">DOCTORS</NavLink>
                <NavLink to="/contactus">CONTACT US</NavLink>
                </Nav>
                {
                    user?.email ?
                    <button onClick={logOut} className="btn btn-primary">logout</button>
                    :
                    <Link to="/login">
                    <button className="btn btn-regular rounded-pill">login</button>
                    </Link>
                }
                <span className="me-3 fw-bold fs-5">or</span>
                <Link to="/signup">
                    <button className="btn btn-regular rounded-pill">Sign-up</button>
                </Link>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;