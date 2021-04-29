import React, { useState } from 'react';
import {
   NavHamburger,
   NavHamburgerLine,
   Ul,
   NavHamb
} from './HamburgerStyle';


const Hamburger = () => {
  const [open, setOpen] = useState(false);
  
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
      </Ul>
    </>
  )
}

export default Hamburger;