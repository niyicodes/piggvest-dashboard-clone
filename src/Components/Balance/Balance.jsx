import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button/Button";
import { Percent, Settings, Temple } from "../Icons/Icons";

const Balance = () => {
 return (
  <BALANCE className="balance">
   <div className="left">
    <div className="left-top">
     <div className="text">
      <h5>MY BALANCE</h5>
      <h2>₦0.00</h2>
     </div>
     <div className="btn">
      <Button name={"+ QUICK SAVE"} />
     </div>
    </div>
    <nav className="left-btm">
     <ul>
      <Link to="">
       <span>{Percent}</span>Interests
      </Link>
      <Link to="">
       <span>{Temple}</span>Withdraw
      </Link>
      <Link to="">
       <span>{Settings}</span>Settings
      </Link>
     </ul>
    </nav>
   </div>
  </BALANCE>
 );
};
const BALANCE = styled.section`
 gap: 2rem;

 .left {
  border: 2px solid gray;
  border-radius: 10px 0px;
  &-top {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   border-bottom: 2px solid gray;
   button {
    padding: 15px;
    margin-right: 1rem;
    border-radius: 6px 8px 0 5px;
    border: none;
    outline: none;
    background-color: rgb(13, 96, 216);
    color: white;
   }
   .text {
    padding: 30px 15px;
    h5 {
     padding-bottom: 5px;
    }
    h2 {
     font-size: 40px;
     color: rgb(13, 96, 216);
    }
   }
  }
  &-btm {
   ul {
    display: flex;
    justify-content: space-around;
    padding: 5px 0;

    a {
     display: flex;
     gap: 0.6rem;
     font-size: 17px;
     text-decoration: none;
     color: black;
     padding: 15px 10px;

     span {
      svg {
       color: rgb(13, 96, 216);
      }
     }
    }
   }
  }
 }
 @media screen and (max-width: 480px) {
  .left {
   &-top {
    flex-direction: column;
    .text{
      margin-right: auto;
      padding: 15px;
      h2{
        font-size: 45px;
      }
    }
    .btn{
      display: flex;
      width: 100%;
      justify-content: center;
      text-align: center;
      button{
      width: 100%;
      margin:5px 5px 10px 5px;
      font-size: 15px;
    }
    }
   }
   &-btm{
     ul{
      a{
        flex-direction: column;
        gap: 0.5px;
        align-items: center;
        padding: 5px;
        font-size:13px;
      }
     }
   }
  }
 }
`;
export default Balance;
