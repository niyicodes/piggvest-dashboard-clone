import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import TopHeader from "../Components/Heading/TopHeader";
import { More } from "../Components/Icons/Icons";
import Nav from "../Components/Nav/Nav";
import invest from "/assets/invest.png"

const Investify = () => {
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
       <p><span>{More}</span> Learn More</p>
      </div>
     </div>
     <div className="left-btm">
      <Nav />
      <Outlet />
     </div>
    </aside>
    <aside className="right">
     <div className="top">
      <p>EXPECTED ROI</p>
      <h4>Up to 25%</h4>
      <small>Per Annum</small>
     </div>
     <div className="bottom">
      <h6>INVESTIFY</h6>
      <figure>
       <img src={invest} alt="invest" />
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
    border: 1px solid gray;
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
     border-top: 1px solid gray;
     border-width: 100%;
     p {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 10px;
      font-size: 20px;
      span{
       display:flex;
      }
     }
    }
   }
   &-btm {
    margin-top: 2rem;
    border: 1px solid gray;
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
   .bottom{
    h6{
     font-size: 20px;
     padding-bottom: 10px;
    }
    figure{
     width: 100%;
     img{
      width: 100%;
     }
    }
   }
  }
 }
@media screen and (max-width: 844px){
 
 .invest{
  flex-direction: column;

  .left{
   width: 100%;
  }
  .right{
   width: 100%;
  }
 }
}

`;
export default Investify;
