import { v4 as uuidv4 } from "uuid";



const transaction = [
 {
  id: `S-F${uuidv4()}`,
  details: "Piggybank Savings To PiggyFlex",
  amount: "₦120,000",
  action: "credit",
 },
 {
  id: `F-S${uuidv4()}`,
  details: "Piggybank Savings To PiggyFlex",
  amount: "₦3,550",
  action: "debit",
 },
 {
  id: `S-F${uuidv4()}`,
  details: "Funds Transferred From PiggyFlex Account",
  amount: "₦52,000",
  action: "credit",
 },
 {
  id: `F-S${uuidv4()}`,
  details: "Piggybank Savings To PiggyFlex",
  amount: "₦7,000",
  action: "debit",
 },
 {
  id: `S-F${uuidv4()}`,
  details: "Funds Transferred From PiggyFlex Account.",
  amount: "₦27,000",
  action: "debit",
 },
];

export default transaction;
