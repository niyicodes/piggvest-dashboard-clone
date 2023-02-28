import {AiOutlineInfoCircle,AiOutlineSearch} from "react-icons/ai"
import { FiDollarSign, FiAtSign, FiThumbsUp, FiTarget } from "react-icons/fi";
import { BiFilm, BiTrendingUp, BiLockAlt } from "react-icons/bi";
import { BsShield, BsCircle } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";


export const Shield = <BsShield />;
export const Film = <BiFilm style={{ color: "#EA4FA2" }} />;
export const Trending = <BiTrendingUp />;
export const Dollar = <FiDollarSign />;
export const At = <FiAtSign />;
export const At1 = <FiAtSign style={{ color: "#7913E5" }} />;
export const Thumb = <FiThumbsUp style={{ color: " #0D60D8" }} />;
export const Lock = <BiLockAlt style={{ color: "#2295F2" }} />;
export const Circle = <BsCircle style={{ color: "#0D60D8" }} />;
export const Target = <FiTarget style={{ color: "#10B259" }} />;
export const More = <AiOutlineInfoCircle />
export const Explore =<MdOutlineExplore />
export const Done =<IoCheckmarkDoneCircleOutline />
export const Search = <AiOutlineSearch />

export const RightArrow = () => {
 return (
  <svg
   fill="none"
   stroke="currentColor"
   stroke-width="1.5"
   viewBox="0 0 24 24"
   xmlns="http://www.w3.org/2000/svg"
   aria-hidden="true"
   style={arrow}
  >
   <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
   ></path>
  </svg>
 );
};
