import React from "react";
import styled from "styled-components";
import { BiRefresh } from "react-icons/bi";
import Button from "../Components/Button/Button";
import HorizontalCard from "../Components/Card/HorizontalCard";
import horizontalCardDetails from "../Components/Card/horizontalcardDetails";
import { At1, Lock, Thumb, Circle } from "../Components/Icons/Icons";
import RadioList from "../Components/Li/RadioList";
import Started from "/assets/get_started_2.jpg";
import { Link } from "react-router-dom";
import TopHeader from "../Components/Heading/TopHeader";
import GetApp from "../Components/APPS/GetApp";

const Home = () => {
 const refreshPage = () => {
  window.location.reload();
 };
 return (
  <HomePage>
   <div className="top">
    <TopHeader
     title="NAME"
     subtitle={"wash your hands, it's lunch time !"}
     img
    />
    <div className="top-second">
     <BiRefresh onClick={refreshPage} />
     <Button name="+ QUICK SAVE" />
    </div>
   </div>
   <div className="middle">
    <div className="middle-first">
     {horizontalCardDetails.map((item, index) => {
      return (
       <HorizontalCard
        icon={item.icon}
        key={index}
        name={item.name}
        balance={item.balance}
        bgColor={item.bgColor}
        colour={item.colour}
        path={item.path}
       />
      );
     })}
    </div>
    <div className="middle-second">
     <div className="middle-second-left">
      <div className="middle-second-left-top">
       <p>TO-DO LIST</p>
       <RadioList
        title="Turn on your Piggybank AutoSave"
        onClick={() => console.log("testing")}
        icon={Circle}
        border="2px solid grey"
       />
       <RadioList
        title="Safelock ₦30,000 for 61 - 90 days"
        onClick={() => console.log("testing")}
        icon={Circle}
        border="2px solid grey"
       />
      </div>
      <div className="middle-second-left-bottom">
       <RadioList
        title="See your recent activities"
        subtitle="See your most recent activities on PiggyVest"
        color="#0D60D8"
        border="2px solid #0D60D8"
        onClick={() => console.log("testing")}
        icon={Thumb}
       />
       <RadioList
        title="Create a Safelock"
        subtitle="Avoid spending temptations. Tap to create a Safelock"
        color="#2295F2"
        border="2px solid #2295F2"
        onClick={() => console.log("testing")}
        icon={Lock}
       />
       <RadioList
        title="Link your Pocket App"
        subtitle="Withdraw from your PiggyVest safer & faster "
        color="#7913E5"
        border="2px solid #7913E5"
        onClick={() => console.log("testing")}
        icon={At1}
       />
      </div>
     </div>
     <div className="middle-second-right">
      <div className="middle-second-right-top">
       <h6>GET STARTED WITH PIGGYVEST</h6>
       <img src={Started} alt="" />
      </div>
      <div className="middle-second-right-bottom">
       <h6>DOWNLOAD THE MOBILE APP</h6>
       <GetApp />
      </div>
     </div>
    </div>
   </div>
   {/* bottom */}
   <div></div>
   <div></div>
  </HomePage>
 );
};
const HomePage = styled.section`
 .top {
  h3 {
   font-family: "Roboto Condensed", sans-serif;
  }
  p {
   font-family: "Source Sans Pro", sans-serif;
  }
  &-second {
   display: flex;
   justify-content: space-between;
   margin: 0 3rem 0 0;
   p {
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 700;
   }
   svg {
    font-size: 30px;
    font-weight: bolder;
   }
   button {
    padding: 10px 20px;
    background-color: rgb(13, 96, 216);
    outline: none;
    border: none;
    border-radius: 10px 7px 7px 0;
    color: white;
    font-family: "Source Sans Pro", sans-serif;
   }
  }
 }
 .middle {
  &-first {
   display: inline-block;
   width: 100%;
   cursor: pointer;
   overflow-x: scroll;
   white-space: nowrap;
   padding-right: 1.5rem;
   margin-bottom: 2rem;

   svg {
    color: white;
   }
  }
  &-second {
   display: flex;
   flex-direction: row;
   gap: 2rem;

   &-left {
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 400;
    width: 60%;
    &-top,
    &-bottom {
     margin-bottom: 2.5rem;
    }
   }
   &-right {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 20px;
    width: 35%;
    &-top {
     margin-top: 20px;
     margin-bottom: 2rem;
     img {
      padding-top: 10px;
      width: 100%;
      border-radius: 10px;
      overflow: hidden;
     }
    }
    &-bottom {
    }
   }
  }
 }
 @media screen and (max-width: 926px) {
  .top {
   &-first {
    h2 {
     font-size: 30px;
    }
    p {
     font-size: 15px;
    }
   }
   &-second {
    margin: 0;
   }
  }
  .middle {
   &-first {
    .horizcard {
     width: 230px;
     height: 100px;
     gap: 1rem;
    }
   }
   &-second {
    flex-direction: column;
    gap: 1rem;

    li {
     padding: 10px;

     h5 {
      font-size: 16px;
     }

     .text {
      gap: 5px;
     }
    }
    &-left {
     width: 100%;

     &-bottom {
      margin-bottom: 1rem;
     }
    }
    &-right {
     width: 100%;
    }
   }
  }
  .bottom {
  }
 }
`;
export default Home;
