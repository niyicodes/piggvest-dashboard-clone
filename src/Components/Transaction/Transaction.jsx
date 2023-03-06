import React from "react";
import styled from "styled-components";
import { CircleFill } from "../Icons/Icons";

const Transaction = ({ details, amount, action, id }) => {
 function randomDate(start, end) {
  return new Date(
   start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
 }
 const date = randomDate(new Date(2018, 0, 1), new Date());
 const myDate = date.toString();

 return (
  <TRANSACTION>
   <div className="info">
    <div style={{'color': action === "credit" ? "green" : "red"}}>{CircleFill}</div>
    <div>
     <p>
      {details}. Transfer ID:{id}
     </p>
     <small>{myDate}</small>
    </div>
   </div>
   <div>
    <h4 style={{'color': action === "credit" ? "green" : "red"}}>{action === "debit" ? "-" : "" }{amount}</h4>
   </div>
  </TRANSACTION>
 );
};

const TRANSACTION = styled.div`
 display: flex;
 justify-content: space-between;
 gap: rem;
 padding: 10px 0;

 .info {
  display: flex;
  gap: 1rem;
  align-items: center;
  /* justify-content: space-between; */

  p {
   font-size: 12px;
   font-family: "Roboto Condensed", sans-serif;
  }
  small {
   font-size: 10px;
  }
 }
 h4{
  font-size: 12px;
 }
`;
export default Transaction;
