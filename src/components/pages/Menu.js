import React  from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
     <div className={"Navigation-bar"}>
     {/* DONT DO THE BELOW THING, USE LINK INSTEAD */}
     {/* <a href="/">About Me</a>
     <a href="/contact">Contact Me</a> */}
     <NavLink exact activeClassName={"active_class"} className={"Navigation-link"} to="/"> About Us </NavLink>
     <NavLink exact activeClassName={"active_class"} className={"Navigation-link"} to="/contact"> Contact Us </NavLink>
     </div>
  );
}

export default Menu;