import React from "react";
import { useSelector } from "react-redux";
import {authSelectors} from '../../redux/auth/index-export';
import { Header } from './AppBar.styled';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu />: <AuthNav />}
        </Header>
    )
}

export default AppBar;