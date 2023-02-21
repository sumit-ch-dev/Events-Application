import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar dark color="dark">
                    <div className="container">
                        <NavbarBrand href="/">Events Page</NavbarBrand>
                        <Nav className="mr-auto">
                            <NavItem>
                                <NavLink href="/">
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Blog</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
            </div>
        )
    }
}


export default Navigation;