import React from "react";
import styled from "styled-components";
import TopHeader from "../Components/Heading/TopHeader";
import { Link } from "react-router-dom";
import ProfileCard from "../Components/Card/ProfileCard";
import cardArray from "../Components/Card/CardArray";
import { HiOutlineCamera } from "react-icons/hi";;
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate()
  const pocketImgLink =
    "https://storage.googleapis.com/piggybankservice.appspot.com/statics/connect-Pocket.jpg";

  const profileImage =
    "https://storage.googleapis.com/piggybankservice.appspot.com/agent_pics/logo8820da29ff.jpeg";
  return (
    <Account>
      {/* Name coming from backend. consume */}
      <TopHeader title={"My Account"} subtitle={"Name"} />
      <main className="account">
        <section className="div__left">
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
            );
          })}
        </section>
        <section className="div__right">
          <div className="right__top">
            <div className="right__top-Img" onClick={() => navigate('/')}>
              <img src={profileImage} alt="profile Image" srcset="" />

              <div className="right__top-hover">
                {" "}
                <HiOutlineCamera size={28} style={{ color: "#FFFFFF" }} />{" "}
              </div>
            </div>
            <span className="right__top-text">
              <TopHeader title={"name"} style={{ margin: "0 auto" }} />
            </span>
          </div>
          
        </section>
      </main>
    </Account>
  );
};

const Account = styled.main`
  .account {
    display: flex;
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
  }
`;

export default Profile;
