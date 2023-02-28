import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Search } from "../Icons/Icons";
import investments from "../Invest/investments";
import styled from "styled-components"
import { investmentNav } from "./FilterNav";

const Explore = () => {
 const [item, setItem] = useState({ name: "all" });
 const [Investment, setInvestment] = useState([]);
 const [active, setActive] = useState(0);

 useEffect(() => {
  // get projects based on item
  if (item.name === "all") {
   setInvestment(investments);
  } else {
   const newInvestment = investments.filter((project) => {
    return project.category.toLowerCase() === item.name;
   });
   setInvestment(newInvestment);
  }
 }, [item]);
 const handleClick = (e, index) => {
  setItem({ name: e.target.textContent.toLowerCase() });
  setActive(index);
 };
 return (
  <EXPLORE>
   <div className="search">
    {Search}
    <input
     type="search"
     name="search"
     id="search"
     placeholder="Search Investments"
    />
   </div>
   <div className="filter">
    <ul>
     {investmentNav.map((item, index) => {
      return (
       <li
        onClick={(e) => {
         handleClick(e, index);
        }}
        className={`${active === index ? "active" : ""}`}
        key={index}
       >
        {item.name}
       </li>
      );
     })}
    </ul>
   </div>
   {Investment.map(
    ({
     name,
     per,
     investors,
     availabilty,
     image,
     onClick,
     id,
     rate,
     category,
    }) => {
     return (
      <Card
       key={id}
       name={name}
       per={per}
       rate={rate}
       investors={investors}
       image={image}
       availabilty={availabilty}
       category={category}
       onClick={() => navigate(`/invest/${id}`)}
      />
     );
    }
   )}
  </EXPLORE>
 );
};

const EXPLORE = styled.section`
.search{
  position: relative;
  margin: 2rem 1rem;
  svg{
    position :absolute;
    font-size: 35px;
    top: 25%;
    left: 0;
    color: #838181;
    padding-left: 3px;
  }

  input{
    width: 100%;
    padding: 20px;
    text-indent: 20px;
    font-size: 22px;
    background-color: #f2eeee;
    color: black;
    outline: none;
    border: none;
    border-radius: 6px;
  }
}
 ul {
  display: flex;
  margin: 1rem;

  li {
   padding: 0 10px;
   margin-right: 15px;
   text-decoration: none;
   list-style: none;
   font-size: 20px;
   border: 2px solid gray;
   border-radius: 10px 0 8px;
   cursor: pointer;
  }

  .active {
   background-color: #7913e5;
   color: white;
  }
 }
 @media screen and (max-width: 428px){
  ul{
    display: grid;
    grid-template-columns: repeat(2, auto);
    row-gap: 20px;

    li{
      font-size: 18px;
      text-align: center;
    }
  }
}
`;
export default Explore;
