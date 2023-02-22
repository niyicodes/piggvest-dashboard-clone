import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HorizontalCard = ({ icon, name, balance, bgColor, colour, path, title, subtitle }) => {
 const navigate = useNavigate()
 return (
  <HorizonCard style={{ backgroundColor: `${bgColor}` }} onClick={() => navigate(`${path}`)} className="horizcard">
   <div className="icon" style={{ color: `${colour}` }}>{icon}</div>
   <div className="text-area">
    {name && <p style={{ color: `${colour}` }}>{name}</p>}
    <h5 style={{ color: `${colour}` }}>{title}</h5>
    <h3>{subtitle}</h3>
    <h4 style={{ color: `${colour}` }}>{balance}</h4>
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
 font-family: 'Roboto Condensed', sans-serif;
 font-weight: 400;
 color: #c6c6c6;
 p {
  font-size: 18px;
  padding-bottom: 15px;
  font-family: 'Source Sans Pro', sans-serif;
 }
 svg {
  font-size: 35px;
 }
 h3{
  color: #4a5568;
  font-size: .875rem;
 }
 
`;
export default HorizontalCard;
