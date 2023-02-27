import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import profile from "/assets/profile.png";

const TopHeader = ({ title, subtitle, img }) => {
 const navigate = useNavigate()
 return (
  <Top className="top">
   <div className="top-text">
    <h3>{title}</h3>
    {subtitle && <p>{subtitle}</p>}
   </div>
   {img && (
    <div className="top-img">
     <img src={profile} alt={title} onClick={()=> navigate("/settings")}/>
    </div>
   )}
  </Top>
 );
};

const Top = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-bottom: 1.2rem;
 font-weight: 700;
 height: 80px;
 .top-text {
  h3 {
   font-size: 40px;
  }
  p {
   color: #b1b1b1;
   font-size: 15px;
  }
 }
 .top-img{
  margin-right: 0;
  img{
   width: 70px;

  }

 }
`;
export default TopHeader;
