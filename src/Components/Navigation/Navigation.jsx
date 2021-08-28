import React from "react";
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth/index-export';
import { Link, Nav } from "./Navigation.styled";


function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
        <Nav>
            <Link exact to="/">
                Home
            </Link>

            {isLoggedIn &&
            <Link to="/contacts">
                Contacts
            </Link>}
        </Nav>
    )
}

export default Navigation;