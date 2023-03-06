import React from "react";
import styled from "styled-components";
import Balance from "../Components/Balance/Balance";
import { Power } from "../Components/Icons/Icons";
import Interest from "../Components/Interest/Interest";
import TransactionNav from "../Components/Nav/TransactionNav";
import Transaction from "../Components/Transaction/Transaction";
import transaction from "../Components/Transaction/Transactions";

const Piggybank = () => {
 return (
  <PIGGYBANK>
   <div className="top">
    <Balance />
    <Interest percent="10%"/>
   </div>
   <div className="others">
    <div className="transaction-area">
     <h5>TRANSCTIONS</h5>
     <TransactionNav />
     <div>
      {transaction.map((transaction) => {
       return <Transaction key={transaction.id} {...transaction} />;
      })}
     </div>
    </div>
    <div className="savings-info">
     <h2>SAVINGS INFO</h2>
     <div className="info">
      <div>
       <p>AutoSave Deposit</p>
       <h4>
        ₦1,000 <span>daily</span>
       </h4>
      </div>
      <div>
       <p>Next Withdrawal</p>
       <h4>19th Aug 2023</h4>
      </div>
     </div>
     <h3>
      <span>{Power}</span> Turn On AutoSave
     </h3>
    </div>
   </div>
  </PIGGYBANK>
 );
};

const PIGGYBANK = styled.main`
 .top {
  display: flex;
  width: 100%;
  gap: 2rem;

  .balance {
   width: 65%;
  }
  .interest {
   width: 35%;
   h2 {
    color: rgb(13, 96, 216);
   }
  }
 }
 .others {
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
  .transaction-area {
   width: 60%;
   border: 1px solid gray;
   padding: 15px;
  }
  .active {
   background-color: rgb(13, 96, 216);
  }

  .savings-info {
   width: 35%;
   height: 180px;
   margin-left: auto;
   h2 {
    font-size: 15px;
   }
   padding: 20px 15px;
   border: 1px solid gray;
   border-radius: 10px 8px 0 6px;
   .info {
    display: flex;
    gap: 1rem;
    border-bottom: 1px solid gray;
    padding: 10px 0;
    > div {
     border: 1px solid gray;
     border-radius: 10px 8px 0 6px;
     padding: 10px;
    }
   }
   h3 {
    font-size: 20px;
    text-align: center;
   }
  }
 }
 @media screen and (max-width: 480px){
  .top{
   flex-direction: column;
   .balance{
    width: 100%;
   }
   .interest{
    width: 40%;
    margin-left: 0;
   }
  }
  .others{
    flex-direction: column-reverse;
    .savings-info{
    width: 100%;
    }
    .transaction-area{
    width: 100%;

    }
  }
 }
`;
export default Piggybank;
