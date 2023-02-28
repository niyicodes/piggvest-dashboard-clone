import React from "react";
import Button from "../Button/Button";
import styled from "styled-components";

const InvestNow = () => {
 return (
  <INVESTNOW className="area">
   <h4>Start Investing</h4>
   <p>Start investing in verified opportunities. Let's help you get started.</p>
   <div className="btns">
    <div className="btn-block">
     <Button name={"INVEST NOW"} className="btn btn-block" />
    </div>
    <div className="btn-transparent">
     <Button name={"LEARN MORE"} />
    </div>
   </div>
  </INVESTNOW>
 );
};

const INVESTNOW = styled.div`
 padding: 15px 20px;
 text-align: center;
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
