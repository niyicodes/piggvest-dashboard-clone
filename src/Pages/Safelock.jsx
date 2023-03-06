import React from "react";
import styled from "styled-components";
import Balance from "../Components/Balance/Balance";
import Interest from "../Components/Interest/Interest";
import Nav from "../Components/Nav/Nav";
import InvestNow from "../Components/Start/InvestNow";

const Safelock = () => {
 return (
  <SAFELOCK>
   <div className="top">
    <Balance />
    <Interest percent={"6% - 13%"} />
   </div>
   <div className="middle">
    <h4>MY SAFELOCKS</h4>

    <InvestNow
     title="Create a Safelock"
     subtitle="You have no SafeLock setup. Let's help you get started."
     btn1="Create a Safelock"
     btn2="What is Safelock?"
    />
   </div>
  </SAFELOCK>
 );
};

const SAFELOCK = styled.section`
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
       color: rgb(34, 149, 242);
      }
     }
     button {
      background-color: rgb(34, 149, 242);
     }
    }
    &-btm {
     svg {
      color: rgb(34, 149, 242);
     }
    }
   }
  }
  .interest {
   width: 35%;
   h2 {
    color: rgb(34, 149, 242);
   }
  }
 }
 .middle {
  border: 1px solid gray;
  width: 65%;
  padding: 1rem;

  .area {
   h4 {
    color: rgb(34, 149, 242);
   }
   .btns {
    .btn-block {
     button {
      background-color: rgb(34, 149, 242);
     }
    }
    .btn-transparent {
     button {
      border-color: rgb(34, 149, 242);
      color: rgb(34, 149, 242);
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
    width: 55%;
    margin-left: 0;
   }
  }
  .middle{
    width: 100%;
  }
 }
`;
export default Safelock;
