import React from "react";
import styled from "styled-components";
import TopHeader from "../Components/Heading/TopHeader";
import { Link } from "react-router-dom";
import ProfileCard from "../Components/Card/ProfileCard";
import cardArray from "../Components/Card/CardArray";
import { HiOutlineCamera } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import AccountDetails from "../Components/Card/AccountDetails";
import { TbCurrencyNaira } from "react-icons/tb";
import ToggleSwitch from "../Components/Toggle/ToggleSwitch";

const Profile = () => {
 const navigate = useNavigate();
 const pocketImgLink =
  "https://storage.googleapis.com/piggybankservice.appspot.com/statics/connect-Pocket.jpg";

 const profileImage =
  "https://storage.googleapis.com/piggybankservice.appspot.com/agent_pics/logo8820da29ff.jpeg";

 const naira = <TbCurrencyNaira />;

 const logState = (state) => {
  console.log("Toggled:", state);
 };

 return (
  <Account>
   {/* Name coming from backend. consume */}
   <TopHeader title={"My Account"} subtitle={"Name"} />
   <main className="account">
    <section className="div__left">
     <Link to={"/"}>
      <img src={pocketImgLink} alt="pocket link" className="div__left-img" />
     </Link>
     {cardArray.map((card,index) => {
      return (
       <ProfileCard
       key={index}
        icon={card.icon}
        name={card.name}
        color={card.color}
        path={card.path}
       />
      );
     })}
    </section>
    <section className="div__right">
     <div className="right__top">
      <div className="right__top-Img" onClick={() => navigate("/")}>
       <img src={profileImage} alt="profile Image"/>

       <div className="right__top-hover">
        {" "}
        <HiOutlineCamera size={28} style={{ color: "#FFFFFF" }} />{" "}
       </div>
      </div>
      <span className="right__top-text">
       <TopHeader title={"name"} style={{ margin: "0 auto" }} />
      </span>
     </div>
     <div className="right__bottom">
      <aside>
       <AccountDetails
        title={"0123456789"}
        subtitle={"Flex number by Wema"}
        path={"/"}
       />
       <AccountDetails
        title={"#BlueBlacYello"}
        subtitle={"Pigglink ID"}
        path={"/"}
       />
      </aside>
      <aside className="aside2">
       <AccountDetails title={"0"} subtitle={"Piggy Points"} path={"/"} />
       <AccountDetails
        title={`${naira}` + "0"}
        subtitle={"Referral Earnings"}
        path={"/"}
       />
      </aside>
     </div>
     <footer className="right__footer">
      <p className="right__footer">Show Dashboard Balance</p>
      <div className="spacer" />
      <ToggleSwitch toggled={true} onClick={logState} />
     </footer>
    </section>
   </main>
  </Account>
 );
};

const Account = styled.main`
 .account {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .div__left {
   flex: 4;

   &-img {
    width: 403px;
    height: 114px;
    border-radius: 10px;
    margin-bottom: 30px;
   }
  }
  .div__right {
   flex: 8;
   margin-left: 100px;
  }
  .right__top {
   &-text div {
    margin: 0 auto;
   }

   &-Img {
    width: 129px;
    height: 129px;
    margin: 0 auto;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    transition: 0.3s ease-in-out;

    & img {
     object-fit: cover;
     width: 129px;
     height: 129px;
     border-radius: 50%;
     z-index: 1;
    }

    &:hover {
     cursor: pointer;

     .right__top-hover {
      padding: 5px 10px;
      background: rgba(150, 147, 137, 0.6);
      width: 129px;
      position: absolute;
      margin-top: -40px;
      display: flex;
      justify-content: center;
      z-index: 99;

      & svg {
       margin: 0 auto;
      }
     }
    }
   }

   &-hover {
    display: none;
   }
  }
  .right__bottom {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: flex-start;
  }

  .right__bottom aside2 {
  }
  .right__footer {
   display: flex;
   justify-content: space-between !important;
   align-items: flex-start;
   padding: 20px;
  }
  .right__footer p {
   flex: 6;
   font-size: 23px;
   font-weight: bold;
  }
  .right__footer spacer {
   flex: 1;
  }
 }
 @media screen and (max-width: 1024px) {
  .account {
   flex-direction: column-reverse;
  }

  .account .div__right {
   margin-left: 0;
  }
  .div__left {
   &-img {
    width: 439px;
    height: 200px;
   }
  }
  .div__right .right__bottom {
   justify-content: space-around;
  }
 }
 @media screen and (max-width: 763px) {
  .div__right .right__bottom {
   flex-direction: column;
  }
 }
`;

export default Profile;
