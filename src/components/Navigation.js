import React from 'react';
import Navbar from "reactstrap/es/Navbar";
import NavItem from "reactstrap/es/NavItem";
import NavLink from "reactstrap/es/NavLink";
import Nav from "reactstrap/es/Nav";

function Navigation() {
    return (
        <Navbar light className="bg-dark">
            <Nav>
                <NavItem>
                    <NavLink href="/people">People</NavLink>
                </NavItem>,
                <NavItem>
                    <NavLink href="/planets">Planets</NavLink>
                </NavItem>,
                <NavItem>
                    <NavLink href="/starships">Starships</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default Navigation;