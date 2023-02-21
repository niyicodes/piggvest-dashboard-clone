import React from "react";
import styled from "styled-components";
const HorizontalCard = ({ icon, name, balance, bgColor, colour }) => {
 return (
  <HorizonCard style={{ backgroundColor: `${bgColor}` }}>
   <div>{icon}</div>
   <div>
    <p style={{ color: `${colour}` }}>{name}</p>
    <h4>{balance}</h4>
   </div>
  </HorizonCard>
 );
};
const HorizonCard = styled.div`
 display: inline-flex;
 padding: 0 30px;
 align-items: center;
 gap: 2rem;
 width: 280px;
 height: 150px;
 margin: 1rem;
 border: 0.5px solid grey;
 border-radius: 9px 9px 0px 9px;
 outline: none;
 font-weight: bolder;
 color: #c6c6c6;
 p {
  font-size: 18px;
  padding-bottom: 15px;
 }
 svg {
  font-size: 35px;
 }
`;
export default HorizontalCard;
