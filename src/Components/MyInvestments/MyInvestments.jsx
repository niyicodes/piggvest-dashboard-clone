import React, { useState } from "react";
import styled from "styled-components";
import InvestNow from "../Start/InvestNow";

const MyInvestments = () => {
 const [investment, setInvestment] = useState([]);
 return (
  <Mine>
   {investment > 0 ? (
    investment.map((invest) => {
     return <p>{invest.name}</p>;
    })
   ) : (
    <InvestNow
     title={"Start Investing"}
     subtitle={
      "Start investing in verified opportunities. Let's help you get started."
     }
     btn1={"INVEST NOW"}
     btn2={"LEARN MORE"}
    />
   )}
  </Mine>
 );
};

const Mine = styled.section``;
export default MyInvestments;
