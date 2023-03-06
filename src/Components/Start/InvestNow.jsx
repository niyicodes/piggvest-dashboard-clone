import React from "react";
import Button from "../Button/Button";
import styled from "styled-components";
import Target from "/assets/target.png"
const InvestNow = ({img, title, subtitle, btn1, btn2}) => {
 return (
  <INVESTNOW className="area">
   {img && <img src={Target} alt="" />}
   <h4>{title}</h4>
   <p>{subtitle}</p>
   <div className="btns">
    <div className="btn-block">
     <Button name={btn1} className="btn btn-block" />
    </div>
    <div className="btn-transparent">
     <Button name={btn2} />
    </div>
   </div>
  </INVESTNOW>
 );
};

const INVESTNOW = styled.div`
 padding: 15px 20px;
 text-align: center;
 img{
  width: 50%;
 }
 h4 {
  font-size: 40px;
  color: #7913e5;
 }
 p {
  font-size: 20px;
 }
 .btns {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  /* width: 30%; */
  margin: 1rem auto;

  button {
   padding: 10px 25px;
   border-radius: 0 8px;
   background-color: #7913e5;
   outline: none;
   border: none;
   color: white;
   font-size: 18px;
   &:hover {
    transform: scale(1.2);
    transition: all 0.6s ease-in-out;
   }
  }
  .btn-transparent {
   button {
    background-color: transparent !important;
    color: #7913e5;
    border: 2px solid #7913e5;
   }
  }
 }
`;
export default InvestNow;
