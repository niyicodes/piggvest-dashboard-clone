import React from "react";
import styled from "styled-components";
import {FaPercent} from 'react-icons/fa'

const ProfileCard = ({}) => {
  return <Card>
    <section className="card__div">
        
        <span className="card__div-span">
            <FaPercent />
        </span>
        <span className="card__div-text">
            Today's rate
        </span>
    </section>
  </Card>
};

const Card = styled.main`
.card__div{
    border: 1px solid #CFDBE0;
    padding: 20px;
    max-width: 303px;
    border-radius: 10px 10px 10px 0;
}
.card__div-text{
    color: #AA6982;
    margin-left: 10px;
    font-size: 14px;
    padding-top: -5px;
    text-transform: capitalize;
}
`

export default ProfileCard;
