import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../Components/Button/Button";
import TopHeader from "../Components/Heading/TopHeader";

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
       <p>Learn More</p>
      </div>
     </div>
     <div className="left-btm">
      <nav>
       <ul>
        <li>
         <NavLink to="/investify" activeClassName="active">
          My investments
         </NavLink>
        </li>
        <li>
         <NavLink to="investify/explore" activeClassName="active">
          Explore
         </NavLink>
        </li>
        <li>
         <NavLink to="investify/completed" activeClassName="active">
          Completed
         </NavLink>
        </li>
       </ul>
      </nav>
      <div className="area">
       <h4>Start Investing</h4>
       <p>
        Start investing in verified opportunities. Let's help you get started.
       </p>
       <div className="btns">
        <div className="btn-block">
         <Button name={"INVEST NOW"} className="btn btn-block" />
        </div>
        <div className="btn-transparent">
         <Button name={"LEARN MORE"} />
        </div>
       </div>
      </div>
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
  font-family: 'Source Sans Pro', sans-serif;

  .left {
   width: 70%;

   &-top {
    border: 2px solid gray;
    margin-bottom: 2rem;
    border-radius: 10px 0px 15px;

    .tp {
     padding: 15px 20px;
     h6 {
      font-size: 10px;
      padding-bottom: 10px;
     }
     h3 {
      font-size: 30px;
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

    nav {
     margin-bottom: 1rem;
     border-bottom: 2px solid gray;
     padding-top: 10px;
     ul {
      display: flex;

      li {
       display: flex;
       padding-right: 10px;
       a {
        text-decoration: none;
       }
       a.active {
        padding-bottom: 7px;
        border-bottom: 3px solid #7913e5;
       }
      }
     }
    }
    .area {
     padding: 15px 20px;
     text-align: center;
     h4 {
      font-size: 30px;
      color: #7913e5;
     }
     p {
      font-size: 18px;
     }
     .btns {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      width: 30%;
      margin: 1rem auto;

      button {
       padding: 10px 25px;
       border-radius: 0 8px;
       background-color: #7913e5;
       outline: none;
       border: none;
       color: white;

       &:hover {
        transform: scale(1.2);
        transition: all 0.6s ease-in-out;
       }
      }
      .btn-transparent {
       button {
        background-color: transparent !important;
        color: #7913e5;
        border: 2px solid #7913e5;
       }
      }
     }
    }
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
     font-size: 10px;
    }
    h4 {
     font-size: 25px;
     color: #7913e5;
    }
   }
  }
 }
`;
export default Investify;
