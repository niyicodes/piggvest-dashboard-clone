import React from "react";
import styled from "styled-components";
import { BiRefresh } from "react-icons/bi";
import Button from "../Components/Button/Button";
import HorizontalCard from "../Components/Card/HorizontalCard";
import horizontalCardDetails from "../Components/Card/horizontalcardDetails";
import { At1, Lock, Thumb, Circle } from "../Components/Icons/Icons";
import RadioList from "../Components/Li/RadioList";
import Started from "/assets/get_started_2.jpg";
import Andriod from "/assets/andriod.png";
import Ios from "/assets/ios.png";
import { Link } from "react-router-dom";
const Home = () => {
 return (
  <HomePage>
   <div className="top">
    <div className="top-first">
     <div>
      <h2>NAME,</h2>
      <p>wash your hands, it's lunch time !</p>
     </div>
     <div>
      <img src="" alt="" />
     </div>
    </div>
    <div className="top-second">
     <BiRefresh />
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
       <div className="app">
        <Link
         to="https://apps.apple.com/ng/app/piggyvest/id1263117994"
         target="_blank"
         rel="noopener noreferrer"
        >
         <img src={Ios} alt="" />
        </Link>
        <Link
         to="https://play.google.com/store/apps/details?id=com.piggybankng.piggy"
         target="_blank"
         rel="noopener noreferrer"
        >
         <img src={Andriod} alt="" />
        </Link>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div></div>
   <div></div>
  </HomePage>
 );
};
const HomePage = styled.section`
 padding: 15px;
 .top {
  &-first {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   margin-bottom: 2rem;
   h2 {
    font-size: 40px;
    font-family: "Roboto Condensed", sans-serif;
   }
   p {
    font-size: 20px;
    color: #b1adad;
    font-weight: bold;
    font-family: "Source Sans Pro", sans-serif;
   }
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
     .app {
      display: flex;
      gap: 1.5rem;
      margin-top: 1rem;
      a {
       text-decoration: none;
       width: 50%;
       img {
        display: block;
        width: 100%;
        height: auto;
       }
      }
     }
    }
   }
  }
 }
 @media screen and (max-width: 926px) {
  .top {
   &-first {
   }
   &-second {
    margin: 0;
   }
  }
  .middle {
   &-first {
   }
   &-second {
    flex-direction: column;
    gap: 1rem;
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
