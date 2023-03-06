import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import TopHeader from "../Components/Heading/TopHeader";
import SavingsNav from "../Components/Nav/SavingsNav";

const AllSavings = () => {
 const location = useLocation();
 const pagetitle = location.pathname;
 let name = pagetitle.replace("/savings/", "");

 return (
  <ALLSAVINGS>
   <TopHeader title={name} img arrow />
   <SavingsNav />
   <Outlet />
  </ALLSAVINGS>
 );
};

const ALLSAVINGS = styled.section`
 font-family: "Source Sans Pro", sans-serif;
 .top {
  &-text {
   h3 {
    text-transform: capitalize;
   }
  }
 }
 @media screen and (max-width: 480px) {
  
  .savings-nav {
   display: none;
  }
 }
`;
export default AllSavings;
