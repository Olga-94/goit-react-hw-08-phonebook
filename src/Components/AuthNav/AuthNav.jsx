import React from "react";
import { Link, Nav } from '../Navigation/Navigation.styled';

function AuthNav() {
    return (
        <Nav>
            <Link
                to="/login"
            >
                Login
            </Link>

            <Link
                to="/registration"
            >
                Registration
            </Link>
        </Nav>
    )
}

export default AuthNav;