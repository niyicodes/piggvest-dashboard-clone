import React from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import TopHeader from "../Components/Heading/TopHeader";
import SavingsNav from "../Components/Nav/SavingsNav";

const AllSavings = () => {

 const location = useLocation();
 console.log(location.pathname);
 const pagetitle = location.pathname
 let name = pagetitle.replace('/savings/', '')
 console.log(name)
 return (
  <ALLSAVINGS>
   <TopHeader title={name} img />
   <SavingsNav />
   <Outlet />
  </ALLSAVINGS>
 );
};

const ALLSAVINGS = styled.section`
font-family: 'Source Sans Pro', sans-serif;


`;
export default AllSavings;
