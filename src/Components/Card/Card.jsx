import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RightArrow } from "../Icons/Icons";

const Card = ({
 topIcon,
 name,
 words,
 title,
 color,
 per,
 investors,
 availabilty,
 image,
 onClick,
 id,
 rate,
 to,
 category
}) => {
 const navigate = useNavigate();
 return (
  <CardComponent className="card" onClick={onClick}>
   <div className="img">{image && <img src={image} alt="" />}</div>
   <div className="card-info">
    <h2>{name}</h2>
    <p>
     <span>{rate}%</span> returns in 9 months
    </p>
    <div className="card-info-details">
     <div>
      <span>
       <h5>₦{per}</h5>
       <small>per unit</small>
      </span>
     </div>
     <div>
      <span>
       <h6>{investors}</h6>
       <small>investors</small>
      </span>
     </div>
    </div>
    <p>{category}</p>
   </div>
  </CardComponent>
 );
};

const CardComponent = styled.div`
 display: flex;
 flex-direction: row;
 gap: 1.5rem;
 padding: 35px;
 border-bottom: 2px solid gray;
 align-items: left;
 border-radius: 20px;
 width: 80%;
 line-height: 1.4;
 margin: 1rem ;
 cursor: pointer;
 &:hover {
  -webkit-box-shadow: 0px 5px 17px 0px rgba(0, 0, 0, 0.76);
  box-shadow: 0px 5px 17px 0px rgba(0, 0, 0, 0.76);
  transition: all 0.6s ease;
 }
 .img {
  width: auto;
  img {
   width: 200px;
   height: 150px;
   object-fit: fill;
  }
 }
 .card-info {
  /* width: 40%; */
  h2 {
   font-size: 25px;
   padding-bottom: 5px;
  }
  p{
   padding-bottom: 10px;
   font-size: 14px;
   color: #d2d2d2;
   span{
    color: #3d9d3d;
    font-weight: 600;
    font-size: 16px;
   }
  }
  &-details {
   display: flex;
   gap: 2rem;
   font-size: 20px;
   h5{
    color: #7913e5;
   }
   small{
    font-size: 12px;
   }
  }
 }

 @media screen and (max-width: 428px){
  flex-direction: column;
  width: 90%;
  padding: 15px;
  .img{
   img{
    width: 100%;
   }
  }
 }
`;
export default Card;
