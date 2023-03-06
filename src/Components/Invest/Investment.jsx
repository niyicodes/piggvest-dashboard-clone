import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button/Button";


const Investment = ({
 image,
 tag,
 title,
 subtitle,
 link,
 button,
 to,
 linkto
}) => {
 return (
  <InvestComponent className="reverse">
   <div className="invest-img">
    <img src={image} alt="invest" />
   </div>
   <div className="invest-text">
    <h5 className="animate__animated animate__zoomIn animate__slow">{tag}</h5>
    <h3 className="animate__animated animate__fadeInRightBig animate__slow">{title}</h3>
    <p className="animate__animated animate__slideInLeft animate__slow">{subtitle}</p>
    {link && <Link to={linkto}>{link}</Link>}
    {button && <Button to={to} name={button} />}
   </div>
  </InvestComponent>
 );
};

const InvestComponent = styled.section`
 display: flex;
 flex-direction: row;
 justify-content: center;
 gap: 2rem;
 align-items: center;
 margin: 4rem auto;
 padding: 0 20px;
 width: 75%;

 .invest-img {
  width: 50%;
  img {
   width: auto;
  }
 }
 .invest-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;

  h5 {
   font-family: "DM Sans", sans-serif !important;
   color: #7913e5;
   font-weight: 700;
  }
  h3 {
   font-family: "Inter", sans-serif !important;
   font-size: 50px;
   font-weight: 700;
   line-height: 1.2;
  }
  p {
   font-family: "DM Sans", sans-serif !important;
   font-weight: 400;
   font-size: 25px;
   line-height: 1.4;
  }
  a {
   font-family: "DM Sans", sans-serif !important;
   font-weight: 500;
   text-decoration: none;
   color: #7913e5;
   transition: all 1s ease-in;
   left: 0;
   &:hover {
    text-decoration: underline;
    left: 100px;
   }
  }
 }
 @media screen and (max-width: 428px) {
  flex-direction: column;
  width: 90%;
  padding: 0 5px;

  .invest-img {
   width: 80%;
   img {
    width: 100%;
   }
  }
  .invest-text {
   text-align: center;
   h3 {
    font-size: 35px;
   }
   p {
    font-size: 20px;
   }
  }
 }
 @media screen and (max-width: 960px) {
  padding: 0 10px !important ;
  .invest-text {
   h3 {
    font-size: 45px;
   }
   p {
    font-size: 19px;
   }
  }
 }
`;
export default Investment;
