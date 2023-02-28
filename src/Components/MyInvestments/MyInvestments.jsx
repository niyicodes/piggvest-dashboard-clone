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
    <InvestNow />
   )}
  </Mine>
 );
};

const Mine = styled.section``;
export default MyInvestments;
