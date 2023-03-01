import React from "react";
import styled from "styled-components";
import TopHeader from "../Components/Heading/TopHeader";
import { Link } from "react-router-dom";
import ProfileCard from "../Components/Card/ProfileCard";
import cardArray from "../Components/Card/CardArray";

const Profile = () => {
  const pocketImgLink =
    "https://storage.googleapis.com/piggybankservice.appspot.com/statics/connect-Pocket.jpg";

  return (
    <Account>
      {/* Name coming from backend. consume */}
      <TopHeader title={"My Account"} subtitle={"Name"} />
      <section className="account">
        <div className="div__left">
          <Link to={"/"}>
            <img
              src={pocketImgLink}
              alt="pocket link"
              className="div__left-img"
            />
          </Link>
          {cardArray.map((card) => {
            return (
              
              <ProfileCard
                icon={card.icon}
                name={card.name}
                color={card.color}
                path={card.path}
              />
            )
          })}
        </div>
        <div className="div__right"></div>
      </section>
    </Account>
  );
};

const Account = styled.main`
  .account {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

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
    }
  }
`;

export default Profile;
