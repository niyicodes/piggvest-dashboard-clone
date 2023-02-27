import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiRocket } from "react-icons/bi";
import { GiHamburgerMenu, GiPowerButton } from "react-icons/gi";
import { ImHome2 } from "react-icons/im";
import { RxTarget, RxPerson } from "react-icons/rx";
import "./Sidebar.css";
const SideBar = () => {
 const [isOpen, setIsOpen] = useState(false);
 const toggle = () => setIsOpen(!isOpen);

 const menuItem = [
  {
   path: "/",
   name: "Home",
   icon: <ImHome2 />,
  },
  {
   path: "/savings",
   name: "Savings",
   icon: <RxTarget />,
  },
  {
   path: "/investify",
   name: "Invest",
   icon: <BiRocket />,
  },
  {
   path: "/settings",
   name: "Account",
   icon: <RxPerson />,
  },
 ];
 return (
   <div style={{ width: isOpen ? "18%" : "5%" }} className="sidebar">
    <div className="top_section">
     <div style={{ marginLeft: isOpen ? "0px" : "0px" }} className="bars">
      <GiHamburgerMenu onClick={toggle} />
     </div>
     <img
      src="/assets/piggywhite.png"
      style={{ display: isOpen ? "block" : "none" }}
      className="logo"
     />
    </div>
    <div className="navs">
     {menuItem.map((item, index) => (
      <NavLink
       to={item.path}
       key={index}
       className="link"
       activeclassName="active"
      >
       <div className="icon">{item.icon}</div>
       <h3 style={{ display: isOpen ? "block" : "none" }} className="link_text">
        {item.name}
       </h3>
      </NavLink>
     ))}
    </div>
    <div className="logout">
     <GiPowerButton />
    </div>
   </div>

 );
};

export default SideBar;
