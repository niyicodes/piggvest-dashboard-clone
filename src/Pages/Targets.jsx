import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Balance from "../Components/Balance/Balance";
import Interest from "../Components/Interest/Interest";
import Nav from "../Components/Nav/Nav";
import InvestNow from "../Components/Start/InvestNow";

const Target = () => {
 return (
  <TARGET>
   <div className="top">
    <Balance />
    <Interest percent="9%" />
   </div>
   <div className="middle">
    <h4>MY SAFELOCKS</h4>

    <InvestNow
     title="Create a Safelock"
     subtitle="Save with discipline towards a specific goal or target. Earn interests every day into your Flex wallet. Let's help you get started."
     btn1="Create a Safelock"
     btn2="What is Safelock?"
     img
    />
   </div>
  </TARGET>
 );
};

const TARGET = styled.section`
 .top {
  display: flex;
  margin-bottom: 2rem;
  gap: 2rem;
  .balance {
   width: 65%;
   .left {
    &-top {
     .text {
      h2 {
       color: rgb(39, 174, 96);
      }
     }
     button {
      background-color: rgb(39, 174, 96);
     }
    }
    &-btm {
     svg {
      color: rgb(39, 174, 96);
     }
    }
   }
  }
  .interest {
   width: 35%;
   h2 {
    color: rgb(39, 174, 96);
   }
  }
 }
 .middle {
  border: 1px solid gray;
  width: 65%;
  padding: 1rem;

  .area {
   h4 {
    color: rgb(39, 174, 96);
   }
   .btns {
    .btn-block {
     button {
      background-color: rgb(39, 174, 96);
     }
    }
    .btn-transparent {
     button {
      border-color: rgb(39, 174, 96);
      color: rgb(39, 174, 96);
     }
    }
   }
  }
 }
 @media screen and (max-width: 480px){
  .top{
   flex-direction: column;
   .balance{
    width: 100%;
   }
   .interest{
    width: 40%;
    margin-left: 0;
   }
  }
  .middle{
    width: 100%;
  }
 }
`;
export default Target;
