import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Dollar, Film, Shield, Lock, Target } from "../Icons/Icons";

const SavingsNav = () => {
 return (
  <SAVINGS_NAV>
   <ul>
    <NavLink to="/savings/piggy" activeClassName="">
     <span>{Shield}</span> Piggybank
    </NavLink>
    <NavLink to="/savings/safelock" activeClassName="">
     <span>{Lock}</span> Safelock
    </NavLink>
    <NavLink to="/savings/target" activeClassName="">
     <span>{Target}</span> Targets
    </NavLink>
    <NavLink to="/savings/flex" activeClassName="">
     <span>{Film}</span> Flex Naira
    </NavLink>
    <NavLink to="/" activeClassName="">
     <span>{Dollar}</span> Flex Dollar
    </NavLink>
   </ul>
  </SAVINGS_NAV>
 );
};

const SAVINGS_NAV = styled.nav`
border-bottom: 3px solid gray;
padding-bottom: 5px;
 ul {
  display: flex;

  a {
   display: flex;
   align-items: center;
   gap: 0.2rem;
   color: gray;
   padding:10px;
   text-decoration: none;
   font-size: 20px;
   font-weight: 600;
   span {
    font-size: 25px;
    display: flex;
    justify-content: center;
    svg {
     color: gray !important;
    }
   }
  }
  a.active {
   padding-bottom: 7px;
   border-bottom: 3px solid;
   /* color: ; */
   span {
    svg {
     /* color: ; */
    }
   }
  }
 }
`;
export default SavingsNav;
