import React, { useState } from 'react';
import LogoImage from '../../assets/images/logo.png';
import {
	HeaderWrapper,
	Inner,
	LogoContainer,
	Logo,
	Nav,
	NavItem,
} from './HeaderStyle';
import Hamburger from '../Hamburger/Hamburger';

const links = {
	Home: 'Home',
	Events: 'Events',
	Register: 'Register',
	Login: 'Login',
	Admin: 'Admin'
}

const Header = () => {
	const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin'));
  	const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('authToken'));

	const logout = () => {
        localStorage.clear();
		window.location.href = "/login";
		isAdmin(false);
		isLoggedIn(false);
    }
	
    return (
        <HeaderWrapper>
			<Inner>
				<LogoContainer to="/">
					<Logo src={LogoImage} alt="Logo" />
				</LogoContainer>
                <Hamburger />
				<Nav>
					<NavItem activeClassName="active" exact to="/">{links.Home}</NavItem>
					<NavItem activeClassName="active" exact to="/events">{links.Events}</NavItem>
				{!isLoggedIn ?
				<>
					<NavItem activeClassName="active" exact to="/register">{links.Register}</NavItem>
					<NavItem activeClassName="active" exact to="/login" >{links.Login}</NavItem>
				</>
				:<NavItem  exact to="/logout" onClick={logout}>Logout</NavItem>}
				{isLoggedIn && isAdmin  ? <NavItem activeClassName="active" exact to="/admin">{links.Admin}</NavItem>
				: null}
				</Nav>
			</Inner>
		</HeaderWrapper>
    );
}

export default Header;