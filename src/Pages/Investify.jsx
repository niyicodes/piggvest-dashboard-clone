import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import Button from "../Components/Button/Button";
import TopHeader from "../Components/Heading/TopHeader";
import Nav from "../Components/Nav/Nav";
import InvestNow from "../Components/Start/InvestNow";

const Investify = ({ investment }) => {
 return (
  <Invest>
   <TopHeader title={"Investify"} img />
   <section className="invest">
    <aside className="left">
     <div className="left-top">
      <div className="tp">
       <h6>TOTAL BALANCE</h6>
       <h3>₦0.00</h3>
      </div>
      <div className="btm">
       <p>Learn More</p>
      </div>
     </div>
     <div className="left-btm">
      <Nav />
      {investment ? (
       <InvestNow />
      ) : (
       <Outlet />
      )}
     </div>
    </aside>
    <aside className="right">
     <div className="top">
      <p>EXPECTED ROI</p>
      <h4>Up to 25%</h4>
      <small>Per Annum</small>
     </div>
     <div>
      <h6>INVESTIFY</h6>
      <figure>
       <img src="" alt="" />
      </figure>
     </div>
    </aside>
   </section>
  </Invest>
 );
};
const Invest = styled.main`
 .invest {
  display: flex;
  gap: 2rem;
  width: 100%;
  font-family: "Source Sans Pro", sans-serif;

  .left {
   width: 70%;

   &-top {
    border: 2px solid gray;
    margin-bottom: 2rem;
    border-radius: 10px 0px 15px;

    .tp {
     padding: 15px 20px;
     h6 {
      font-size: 20px;
      padding-bottom: 10px;
     }
     h3 {
      font-size: 40px;
      padding-bottom: 5px;
      color: #7913e5;
     }
    }
    .btm {
     text-align: center;
     border-top: 2px solid gray;
     border-width: 100%;
     p {
      padding: 10px;
     }
    }
   }
   &-btm {
    margin-top: 2rem;
    border: 2px solid gray;
    border-radius: 0 10px 15px;
   }
  }
  .right {
   width: 30%;
   .top {
    border: 2px solid gray;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 2.5rem;
    border-radius: 10px 0px 15px;
    p {
     font-size: 15px;
    }
    h4 {
     font-size: 35px;
     color: #7913e5;
    }
    small {
     font-size: 15px;
    }
   }
  }
 }
`;
export default Investify;
