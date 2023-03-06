import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import profile from "/assets/profile.png";
import { BsArrowLeft } from "react-icons/bs";

const TopHeader = ({ title, subtitle, img, arrow }) => {
 const navigate = useNavigate();
 return (
  <Top className="top">
   <div className="top-text">
    <div className="text">
     {arrow && <BsArrowLeft onClick={() => navigate("/savings")} />}{" "}
     <h3
      style={{
       color:
        title === "piggy"
         ? "rgb(13, 96, 216)"
         : title === "safelock"
         ? "rgb(34, 149, 242)"
         : title === "target"
         ? "rgb(39, 174, 96)"
         : title === "flex"
         ? "rgb(192, 60, 133)"
         : "black",
      }}
     >
      {title}
     </h3>
    </div>
    {subtitle && <p>{subtitle}</p>}
   </div>
   {img && (
    <div className="top-img">
     <img src={profile} alt={title} onClick={() => navigate("/settings")} />
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
  .text {
   display: flex;
   align-items: center;
   gap: 0.5rem;

   svg {
    display: none;
    font-size: 25px;
   }
  }
  h3 {
   font-size: 40px;
  }
  p {
   color: #b1b1b1;
   font-size: 15px;
  }
 }
 .top-img {
  margin-right: 0;
  img {
   width: 70px;
  }
 }
 @media screen and (max-width: 480px) {
  .top {
   margin-bottom: 0.8rem;
   &-text {
    .text {
     svg {
      display: block;
     }
     h3 {
      font-size: 30px;
     }
    }
   }
   &-img {
    img {
     width: 50px;
    }
   }
  }
 }
`;
export default TopHeader;
