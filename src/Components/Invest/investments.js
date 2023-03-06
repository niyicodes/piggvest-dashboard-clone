import debt from "/assets/debt.jpg";
import sundry from "/assets/sundry.jpg";
import trustbanc from "/assets/trustbanc.jpg";
import realestate from "/assets/realestate.png";
import coleman from "/assets/coleman.jpg";
import moni from "/assets/moni.png";
import { v4 as uuidv4 } from "uuid";
const investments = [
 {
  id: uuidv4(),
  image: debt,
  name: "Corporate Debt Note 1",
  per: "5,000",
  investors: 742,
  availabilty: "Sold Out",
  rate: "12.5",
  category: "fixed income",
 },
 {
  id: uuidv4(),
  image: sundry,
  name: "Sundry Foods Limited Series 1 Commercial Paper Issue",
  per: "5,000",
  investors: 1607,
  availabilty: "Sold Out",
  rate: "11.8",
  category: "agriculture",
 },
 {
  id: uuidv4(),
  image: trustbanc,
  name: "TrustBanc Commercial Paper - Series 11",
  per: "5,000",
  investors: 1424,
  availabilty: "Sold Out",
  rate: "11.8",
  category: "fixed income",
 },
 {
  id: uuidv4(),
  image: realestate,
  name: "Verified Real Estate Investment In Freedom Way, Lekki",
  per: "5,000",
  investors: 14982,
  availabilty: "Sold Out",
  rate: "verified",
  category: "real-estate",
 },
 {
  id: uuidv4(),
  image: coleman,
  name: "Coleman Series VI Commercial Paper Issue",
  per: "5,000",
  investors: 2805,
  availabilty: "Sold Out",
  rate: "11.7",
  category: "fixed income",
 },
 {
  id: uuidv4(),
  image: moni,
  name: "Rank Capital Credit Financing",
  per: "5,000",
  investors: 828,
  availabilty: "Sold Out",
  rate: "8.8",
  category: "fixed income",
 },
];

export default investments;
