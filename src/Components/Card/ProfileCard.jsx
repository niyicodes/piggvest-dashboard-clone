import React from "react";
import styled from "styled-components";
import { FaPercent } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const ProfileCard = ({icon, name, color, path }) => {
  const navigate = useNavigate()
  return (
    <Card onClick={() => navigate(`${path}`)}>
      {/* <Link to={'/'}> */}
        <section className="card__div">
          <div className="card__div-span">
            {icon}
          </div>
          <span className="card__div-text">{name}</span>
        </section>
      {/* </Link> */}
    </Card>
  );
};

const Card = styled.main`
  .card__div {
    border: 1px solid #cfdbe0;
    padding: 20px;
    width: 403px;
    border-radius: 10px 10px 10px 0;
    margin: 20px 0;
  }
  .card__div:hover{
    cursor: pointer;
  }
  .card__div-text {
    color: #aa6982;
    margin-left: 10px;
    font-size: 18px;
  }
  .card__div-span{
    display: inline-block;
  }
  @media screen and (max-width: 1024px){
    .card__div{
      width: 100%;
    }
  }
`;

export default ProfileCard;
