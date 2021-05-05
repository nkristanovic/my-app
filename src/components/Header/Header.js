import React from 'react';
import LogoImage from '../../assets/images/logo.png';
import {
	HeaderWrapper,
	Inner,
	LogoContainer,
	Logo,
	Nav,
	NavItem,
} from './HeaderStyle';
import  Hamburger from '../Hamburger/Hamburger';

const links = {
	Home: 'Home',
	Events: 'Events',
	Register: 'Register',
	Login: 'Login',
	Admin: 'Admin'
}

const Header = () => {

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
					<NavItem activeClassName="active" exact to="/register">{links.Register}</NavItem>
					<NavItem activeClassName="active" exact to="/login">{links.Login}</NavItem>
					<NavItem activeClassName="active" exact to="/admin">{links.Admin}</NavItem>
				</Nav>
			</Inner>
		</HeaderWrapper>
    );
}

export default Header;