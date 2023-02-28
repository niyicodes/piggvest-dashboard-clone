import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Done, Explore, Target } from "../Icons/Icons";

const Nav = () => {
 return (
  <Navbar>
   <ul>
    <NavLink to="" activeClassName="active">
     <span>{Target}</span> My investments
    </NavLink>
    <NavLink to="explore" activeClassName="active">
     <span>{Explore}</span>Explore
    </NavLink>
    <NavLink to="completed" activeClassName="active">
     <span>{Done}</span> Completed
    </NavLink>
   </ul>
  </Navbar>
 );
};

const Navbar = styled.nav`
 margin-bottom: 1rem;
 border-bottom: 2px solid gray;
 padding-top: 10px;
 ul {
  display: flex;

  a {
   display: flex;
   align-items: center;
   gap: 0.2rem;
   color: gray;
   padding-right: 20px;
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
   border-bottom: 3px solid #7913e5;
   color: #7913e5;
   span {
    svg {
     color: #7913e5 !important;
    }
   }
  }
 }
`;
export default Nav;
