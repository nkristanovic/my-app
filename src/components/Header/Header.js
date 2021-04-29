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
				</Nav>
			</Inner>
		</HeaderWrapper>
    );
}

export default Header;