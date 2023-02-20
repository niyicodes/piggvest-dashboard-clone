import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import piggywhite from "/assets/piggywhite.png";

const SignUp = () => {
 return (
  <Register className="login">
   <div className="mainarea">
    <div className="img">
     <Link to="https://niyipiggyvestclone.netlify.app/" target="_blank" rel="noopener noreferrer">
      <img src={piggywhite} alt="" />
     </Link>
    </div>
    <form className="form-area">
     <div className="top-text">
      <h3>Create a Secure Account</h3>
      <p>Welcome to the future of Savings & Investments</p>
     </div>
     <div className="input-area">
      <label htmlFor="text">Full Name</label>
      <input type="text" name="name" id="name" placeholder="Full Name"/>
     </div>
     <div className="input-area">
      <label htmlFor="email">Email Address</label>
      <input type="email" name="email" id="email" placeholder="Email Address"/>
     </div>
     <div className="input-area">
      <label htmlFor="phone">Phone Number</label>
      <input type="tel" name="phone" id="phone" placeholder="Phone Number"/>
     </div>
     <div className="input-area">
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" placeholder="Password"/>
     </div>
     <div className="input-area">
      <label htmlFor="promo-code">Referrer Phone or Promo Code (Optional)</label>
      <input type="text" name="promo-code" id="promo-code" placeholder="Referrer Phone or Promo Code"/>
     </div>
     <div className="input-area">
      <label htmlFor="hear">How Did You Hear About Us? (Optional)</label>
      <select name="options" id="optons" placeholder="Click to select">
        <option value="post">Facebook</option>
        <option value="post">Twitter</option>
        <option value="referral">Friend/Family/Coworker</option>
        <option value="post">Blog</option>
        <option value="post">Local Newspaper</option>
        <option value="post">At an Event</option>
      </select>
     </div>

     <input type="submit" value="CREATE ACCOUNT" />
    </form>
    <div className="below">
     <Link to="/login">
      <p>Already have an account? Log In</p>
     </Link>
    </div>
   </div>
  </Register>
 );
};

const Register = styled.main`
 background: url("/assets/bg.png");
 background-repeat: no-repeat;
 background-position: center;
 background-size: cover;
 /* height: 100vh; */
 /* width: 100%; */
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 font-family: "Inter", sans-serif !important;
 font-weight: 500;
  padding: 3rem 0;
 .mainarea {
  .img {
   text-align: center;
  }
  .form-area {
   max-width: 100%;
   width: 500px;
   background-color: white;
   margin: 2rem 0;
   padding: 2rem;
   border-radius: 18px;
   border-bottom-left-radius: 0px;

   .top-text {
    text-align: center;
    padding: 20px 0;
    color: #083e9e;
    font-weight: 700;

    p {
     color: #4a5568;
     font-weight: 400;
     font-size: 14px;
    }
   }

   .input-area {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    label {
     font-size: 0.8rem !important;
     padding-bottom: 7px;
     font-weight: 700;
    }
    input, select {
     padding: 15px;
     font-size: 1.1rem;
     border: none;
     border-radius: 5px;
     outline: none;
     background-color: #edf2f7;
    }
   }
   input[type="submit"] {
    width: 100%;
    padding: 16px;
    background-color: #083E9E;
    color: white;
    border: none;
    outline: none;
    border-radius: 8px;
    border-bottom-left-radius: 0px;
    cursor: pointer;
    margin-bottom: 15px;
    font-size: 15px;
    font-weight: 700;

    &:hover {
     background-color: #083e9e;
    }
   }
  }
  .below {
   text-align: center;
   a {
    color: white;
    text-decoration: none;
    p {
     padding-bottom: 15px;
    }
    &:hover {
     color: #c2bfbf;
    }
   }
  }
 }

 @media (max-width: 428px) {
  
  .form-area{
    width: 100%!important;
    margin:2rem auto!important;

    .top-text{
      p{
        padding: 10px 0;;
      }
    }
  }
  .below{
    font-size: 13px;
  }
 }
`;

export default SignUp;
