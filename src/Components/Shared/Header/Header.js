import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const Header = () => {
    const {user, logOut} =useAuth();
    return (
        <div className="mx-4">
            <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
                <>
                <i class="fas fa-brain icon"></i> 
                <Navbar.Brand className="fw-bold">
                MIND HEALTH <br /> CLINIC</Navbar.Brand>
                <Nav className="ms-auto fw-bold" >
                <NavLink to="/home">HOME</NavLink>
                <NavLink to="/aboutus">ABOUT US </NavLink>
                <NavLink to="/doctors">DOCTORS</NavLink>
                <NavLink to="/contactus">CONTACT US</NavLink>
                </Nav>
                <Navbar.Text className="me-3 fs-5 fw-bold">
                Signed in as: <span className="text-primary">{user?.displayName}</span> 
                </Navbar.Text>
                {
                    user?.email ?
                    <button onClick={logOut} className="btn btn-regular rounded-pill">log out</button>
                    :
                    <Link to="/login">
                    <button className="btn btn-regular rounded-pill">log in</button>
                    </Link>
                }
                <span className="ms-2 me-3 fw-bold fs-5">or</span>
                <Link to="/signup">
                    <button className="btn btn-regular rounded-pill">Sign-up</button>
                </Link>
                </>
            </Navbar>
        </div>
    );
};

export default Header;