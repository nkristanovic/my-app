import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import Logo from '../../assets/images/logo.png';

const links = {
	Home: 'Home',
	Events: 'Events',
}

const Header = () => {
    return (
        <header className="Header">
			<div className="Header-Inner">
				<NavLink to="/" className="Header-LogoContainer">
					<img src={Logo} alt="Logo" className="Header-Logo"/>
				</NavLink>
                <div className="Header-NavHamburger">
                    <div className="Header-NavHamburgerLine"></div>
                    <div className="Header-NavHamburgerLine"></div>
                    <div className="Header-NavHamburgerLine"></div>
                </div>
				<nav className="Header-Nav">
					<NavLink exact to="/" className="Header-NavItem" activeClassName="Header-NavItem_active">{links.Home}</NavLink>
					<NavLink exact to="/events" className="Header-NavItem" activeClassName="Header-NavItem_active">{links.Events}</NavLink>
				</nav>
			</div>
		</header>
    );
}

export default Header;