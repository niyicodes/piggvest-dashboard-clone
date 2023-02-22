import React from "react";
import styled from "styled-components";
import HorizontalCard from "../Components/Card/HorizontalCard";
import savingDetails from "../Components/Card/savingDetails";
import Started from "/assets/get_started_2.jpg";

const Savings = () => {
 return (
  <SavingsPage>
   <div className="top">
    <div className="top-text">
     <h3>Savings</h3>
     <p>Let's see how well you're doing.</p>
    </div>
    <div className="top-img"></div>
   </div>
   <div className="middle">
    <div className="middle-left">
     <small>Total Balance</small>
     <h4>₦4,000,000</h4>
    </div>
    <div className="middle-right">
     <p>GET STARTED WITH PIGGYVEST</p>
     <figure>
      <img src={Started} alt="started" />
     </figure>
    </div>
   </div>
   <div className="bottom">
    {savingDetails.map((item, index) => {
     return (
      <HorizontalCard
       icon={item.icon}
       key={index}
       title={item.title}
       subtitle={item.subtitle}
       balance={item.balance}
       bgColor={item.bgColor}
       colour={item.colour}
       path={item.path}
      />
     );
    })}
   </div>
  </SavingsPage>
 );
};

const SavingsPage = styled.section`
  font-family: 'Roboto Condensed', sans-serif;
 padding: 15px;
 .top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
  font-weight: 700;
  &-text {
   h3 {
     font-size: 35px;
   }
   p {
    color: #b1b1b1;
    font-size: 15px;
   }
  }
 }
 .middle {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  height: 200px;
  margin-bottom: 2rem;
  &-left {
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 70%;
   border: 1px solid #b1b1b1;
   border-radius: 7px;
   align-items: left;
   padding-left: 15px;
   small {
    padding-bottom: 10px;
    font-size: 18px;
    color: #b1b1b1;
   }
   h4 {
    font-family: 'Source Sans Pro', sans-serif;
    color: rgb(13, 96, 216);
    font-size: 25px;
    font-weight: 900;
   }
  }
  &-right {
font-family: 'Source Sans Pro', sans-serif;
font-weight: 400;
   width: 30%;
   height: 100%;
   figure {
    width: 100%;
    height: auto;

    img {
     width: 100%;
     height: 200px;
     object-fit: contain;
     border-radius: 10px;
     overflow: hidden;
    }
   }
  }
 }
 .bottom {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  .horizcard {
    padding: 20px;
   width: 350px;
   height: 200px;
   display: flex;
   flex-direction: column;
   gap: 1rem;
   align-items: left;
   .text-area {
    display: flex;
    flex-direction: column;
    gap: 1rem;
   }
   .icon{
     align-self: flex-start;
     svg{
      font-size: 25px;
     }
   }
  }
 }
`;
export default Savings;
