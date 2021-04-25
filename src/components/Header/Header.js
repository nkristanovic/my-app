import React from 'react';
import LogoImage from '../../assets/images/logo.png';
import {
	HeaderWrapper,
	Inner,
	LogoContainer,
	Logo,
	Nav,
	NavHamburger,
	NavHamburgerLine,
	NavItem,
} from './HeaderStyle';

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
                <NavHamburger>
                    <NavHamburgerLine />
                    <NavHamburgerLine />
                    <NavHamburgerLine />
                </NavHamburger>
				<Nav>
					<NavItem exact to="/">{links.Home}</NavItem>
					<NavItem exact to="/events">{links.Events}</NavItem>
				</Nav>
			</Inner>
		</HeaderWrapper>
    );
}

export default Header;