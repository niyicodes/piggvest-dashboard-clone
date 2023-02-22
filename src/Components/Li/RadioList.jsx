import React from "react";
import styled from "styled-components";

const RadioList = ({ title, onClick, img, subtitle, icon, border, color }) => {
 return (
  <Radiolist onClick={onClick} style={{border: `${border}`}}>
   <div className="icon">
    {icon}
   </div>
   <div className="text">
    <h5 style={{color: `${color}`}}>{title}</h5>
    {subtitle && <p>{subtitle}</p>}
   </div>
  </Radiolist>
 );
};

const Radiolist = styled.li`
 display: flex;
 align-items: center;
 gap: 1rem;
 padding: 15px 10px;
 border-radius: 10px 7px 7px 0;
 margin: 1rem 0;
 cursor: pointer;
 svg {
  margin: auto 0;
  width: 30px;
 }
 h5{
  font-family: 'Roboto Condensed', sans-serif;
  font-size:18px ;
 }

 .text{
  display: flex;
  flex-direction: column;
  gap:10px;

  p{
   color: #b6b5b5;
   font-family: 'Source Sans Pro', sans-serif;
   font-weight: 400;
  }
 }
`;
export default RadioList;
