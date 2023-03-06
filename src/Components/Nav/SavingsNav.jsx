import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Dollar, Film, Shield, Lock, Target } from "../Icons/Icons";

const SavingsNav = () => {
 return (
  <SAVINGS_NAV className="savings-nav">
   <ul>
    <NavLink to="piggy" id="piggy">
     <span>{Shield}</span> Piggybank
    </NavLink>
    <NavLink to="safelock" id="safelock">
     <span>{Lock}</span> Safelock
    </NavLink>
    <NavLink to="target" id="target">
     <span>{Target}</span> Targets
    </NavLink>
    <NavLink to="flex" id="naira">
     <span>{Film}</span> Flex Naira
    </NavLink>
    <NavLink to="/">
     <span>{Dollar}</span> Flex Dollar
    </NavLink>
   </ul>
  </SAVINGS_NAV>
 );
};

const SAVINGS_NAV = styled.nav`
 border-bottom: 3px solid gray;
 padding-bottom: 5px;
 margin-bottom: 1.5rem;
font-family: 'Roboto Condensed', sans-serif;

 ul {
  display: flex;

  a {
   display: flex;
   align-items: center;
   gap: 0.2rem;
   color: gray;
   padding: 10px;
   text-decoration: none;
   font-size: 20px;
   font-weight: 700;
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

   span {
    svg {
    }
   }
  }
  a.active#piggy {
   color: rgb(13, 96, 216);
   span {
    svg {
     color: rgb(13, 96, 216) !important;
    }
   }
  }
  a.active#safelock {
   color: rgb(34, 149, 242);
   span {
    svg {
     color: rgb(13, 96, 216) !important;
    }
   }
  }
  a.active#target {
   color: rgb(39, 174, 96);
   span {
    svg {
     color: rgb(39, 174, 96) !important;
    }
   }
  }
  a.active#naira {
   color: rgb(192, 60, 133);
   span {
    svg {
     color: rgb(192, 60, 133) !important;
    }
   }
  }
 }
`;
export default SavingsNav;
