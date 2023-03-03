import React from "react";
import styled from "styled-components";
import { CircleFill } from "../Icons/Icons";

const Transaction = ({ icon, id, date }) => {
 return (
  <TRANSACTION>
   <div className="info">
    <div>{CircleFill}</div>
    <div>
     <p>Funds from here to here . Transfer ID:lsdfjklfldfjklfjkldfjklsdfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj {}</p>
     <small>Fri, 21 May 2021 15:54:56 GMT</small>
    </div>
   </div>
   <div>
    <h4>₦50,000</h4>
   </div>
  </TRANSACTION>
 );
};

const TRANSACTION = styled.div`
 display: flex;
 justify-content: space-between;
 gap: 1rem;
 padding: 10px 0;

 .info {
  display: flex;
  gap: 1rem;
  align-items: center;
  /* justify-content: space-between; */

  p{
   font-size: 13px;
   font-family: 'Roboto Condensed', sans-serif;
  }
  small{
   font-size: 10px;
  }
 }
`;
export default Transaction;
