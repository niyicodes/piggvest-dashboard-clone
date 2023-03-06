import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TransactionNav = () => {
 const transacNav = [
  {
   name: "All",
  },
  {
   name: "Credit",
  },
  {
   name: "Debit",
  },
 ];
 const [item, setItem] = useState({ name: "all" });
 const [transaction, setTransaction] = useState([]);
 const [active, setActive] = useState(0);

 // useEffect(() => {
 //  // get projects based on item
 //  if (item.name === "all") {
 //   setTransaction(transactions);
 //  } else {
 //   const newtransaction = transactions.filter((project) => {
 //    return project.category.toLowerCase() === item.name;
 //   });
 //   setTransaction(newtransaction);
 //  }
 // }, [item]);
 const handleClick = (e, index) => {
  setItem({ name: e.target.textContent.toLowerCase() });
  setActive(index);
 };
 return (
  <TRANSACNAV>
   {transacNav.map((item, index) => {
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
  </TRANSACNAV>
 );
};

const TRANSACNAV = styled.ul`
 display: flex;
 margin-top: 1rem;

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

  color: white;
 }
`;
export default TransactionNav;
