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
 font-family: "Roboto Condensed", sans-serif;
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
    font-size: 20px;
    color: #b1b1b1;
   }
   h4 {
    font-family: "Source Sans Pro", sans-serif;
    color: rgb(13, 96, 216);
    font-size: 35px;
    font-weight: 900;
   }
  }
  &-right {
   font-family: "Source Sans Pro", sans-serif;
   font-weight: 400;
   width: 30%;
   height: 100%;
   figure {
    width: 100%;
    height: auto;
    margin-right: auto;
    img {
     width: 100%;
     height: 200px;
     object-fit: contain;
     border-radius: 10px;
     overflow: hidden;
     float: left;
    }
   }
  }
 }
 .bottom {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  place-items: center;
  margin: 0 auto;

  .horizcard {
   padding: 25px;
   width: 420px;
   height: 200px;
   display: flex;
   flex-direction: column;
   border: none;
   border-radius: 20px;
   gap: 1rem;
   align-items: left;
   .text-area {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
    margin-right: auto;
    h5 {
     font-size: 20px;
    }
    h3 {
     font-size: 15px;
    }
    h4 {
     font-size: 20px;
    }
   }
   .icon {
    align-self: flex-start;
    svg {
     font-size: 25px;
    }
   }
  }
 }
 @media screen and (max-width: 926px) {
  .top {
  }
  .middle {
   flex-direction: column;
   height: auto;
   margin-bottom: 0.5rem;
   &-left {
    width: 100%;
    padding: 15px;
   }
   &-right {
    width: 100%;
    figure {
     img {
      padding-top: -10px;
     }
    }
   }
  }
  .bottom {
   grid-template-columns: repeat(2, auto);
   gap: 10px;
   margin:0 1rem;
   row-gap: 10px;
   .horizcard {
    width: 100%;
    height: auto;
    padding: 15px 13px;

    .text-area {
     gap: 0.7rem;

     h5 {
      font-size: 18px;
     }
     h3 {
      font-size: 13px;
     }
     h4 {
      font-size: 18px;
     }
    }
   }
  }
 }
 @media screen and (min-width: 1024px) {
   .bottom{
     .horizcard{
       width: auto;
     }
   }
 }
`;
export default Savings;
