import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import piggywhite from "/assets/piggywhite.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword } from "../Firebase/firebase";


const SignIn = () => {
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const [user, loading, error] = useAuthState(auth);

 const navigate = useNavigate();

 useEffect(() => {
  if (loading) {
   // maybe trigger a loading screen
   return;
  }
  if (user) navigate("/");
 }, [user, loading]);

 console.log(user)
 
 return (
  <Login className="login">
   <div className="mainarea">
    <div className="img">
     <Link
      to="https://niyipiggyvestclone.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
     >
      <img src={piggywhite} alt="" />
     </Link>
    </div>
    <form className="form-area">
     <div className="top-text">
      <h3>Login to your account</h3>
      <p>Securely login to your Piggyvest</p>
     </div>
     <div className="input-area">
      <label htmlFor="text">Email or Phone Number</label>
      <input type="text" name="" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
     </div>
     <div className="input-area">
      <label htmlFor="password">Password</label>
      <input type="password" name="" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
     </div>

     <input type="submit" value="LOG IN" onClick={() => logInWithEmailAndPassword(email, password)}/>
    </form>
    <div className="below">
     <Link to="/register">
      <p>Don't have an account? Register</p>
     </Link>
     <Link to="/forgot">Forgot Password?</Link>
    </div>
   </div>
  </Login>
 );
};

const Login = styled.main`
 background: url("/assets/bg.png");
 background-repeat: no-repeat;
 background-position: center;
 background-size: cover;
 height: 100vh;
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 font-family: "Inter", sans-serif !important;
 font-weight: 500;

 .mainarea {
  .img {
   text-align: center;
  }
  .form-area {
   max-width: 100%;
   width: auto;
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
    input {
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
    background-color: #0d60d8;
    color: white;
    border: none;
    outline: none;
    border-radius: 8px;
    border-bottom-left-radius: 0px;
    cursor: pointer;
    margin-bottom: 15px;
    font-size: 18px;
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

 @media (max-width: 320px) {
  height: 120vh;
  .mainarea {
   .img {
    padding-top: 15px;
   }
   .form-area {
    width: 100%;
    margin: 0.7rem 0;
    padding: 0.7rem;
    .top-text {
     padding: 10px;

     p {
      font-size: 10px;
     }
    }
    .input-area {
     margin-bottom: 20px;
    }
   }
  }
 }
`;

export default SignIn;
