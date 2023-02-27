import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Andriod from "/assets/andriod.png";
import Ios from "/assets/ios.png";

const GetApp = () => {
 return (
  <GetAPP className="app">
   <Link
    to="https://apps.apple.com/ng/app/piggyvest/id1263117994"
    target="_blank"
    rel="noopener noreferrer"
   >
    <img src={Ios} alt="" />
   </Link>
   <Link
    to="https://play.google.com/store/apps/details?id=com.piggybankng.piggy"
    target="_blank"
    rel="noopener noreferrer"
   >
    <img src={Andriod} alt="" />
   </Link>
  </GetAPP>
 );
};

const GetAPP = styled.div`
 display: flex;
 flex-direction: row;
 gap: 1.5rem;
 margin-top: 1rem;
 a {
  text-decoration: none;
  width: 50%;
  img {
   display: block;
   width: 100%;
   height: auto;
  }
 }
 @media screen and (max-width: 926px){
   
 }
`;
export default GetApp;
