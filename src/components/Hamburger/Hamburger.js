import React, { useState } from 'react';
import {
   NavHamburger,
   NavHamburgerLine,
   Ul,
   NavHamb
} from './HamburgerStyle';


const Hamburger = ({ isLoggedIn, isAdmin, setIsLoggedIn, setIsAdmin }) => {
  const [open, setOpen] = useState(false);

	const logout = () => {
    localStorage.clear();
		window.location.href = "/login";
		setIsAdmin(false);
		setIsLoggedIn(false);
    }
  
  return (
    <>
      <NavHamburger open={open} onClick={() => setOpen(!open)}>
        <NavHamburgerLine />
        <NavHamburgerLine />
        <NavHamburgerLine />
      </NavHamburger>
      <Ul open={open}>
        <NavHamb to="/" onClick={() => setOpen(!open)} >Home</NavHamb>
        <NavHamb to="/events" onClick={() => setOpen(!open)}>Events</NavHamb>
        {!isLoggedIn ?
				<>
        <NavHamb to="/register" onClick={() => setOpen(!open)}>Register</NavHamb>
        <NavHamb to="/login" onClick={() => setOpen(!open)}>Login</NavHamb>
        </>
				:<NavHamb  exact to="/logout" onClick={logout}>Logout</NavHamb>}
        {isLoggedIn && isAdmin  ? <NavHamb to="/admin" onClick={() => setOpen(!open)}>Admin</NavHamb>
        : null}
      </Ul>
    </>
  )
}

export default Hamburger;