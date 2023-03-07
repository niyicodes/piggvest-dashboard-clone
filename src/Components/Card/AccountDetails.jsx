import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TopHeader from "../Heading/TopHeader";

const AccountDetails = ({ title, subtitle , path}) => {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`${path}`)}>
     
      <section className="card__div">
        <TopHeader title={title} subtitle={subtitle} />
      </section>
     
    </Card>
  );
};

const Card = styled.main`
  .card__div {
    border: 1px solid #cfdbe0;
    padding: 0px 15px;
    width: 355px;
    border-radius: 10px 10px 10px 0;
    margin: 20px 0;
  }
  .card__div:hover {
    cursor: pointer;
  }
`;
export default AccountDetails;
