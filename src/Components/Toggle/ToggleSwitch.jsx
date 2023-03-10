import { useState } from "react";
import styled from "styled-components";

export default function ToggleSwitch({ toggled, onClick }) {
 const [isToggled, toggle] = useState(toggled);

 const callback = () => {
  toggle(!isToggled);
  onClick(!isToggled);
 };

 return (
  <label style={{ background: isToggled === true ? "green" : null }}>
   <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
   <span className="toggleSpan"></span>
  </label>
 );
}

const Label = styled.label`
 label {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  background-color: grey;
  border-radius: 20px;
  margin-top: 18px;
 }

 input {
  opacity: 0;
  width: 0;
  height: 0;
 }

 label .toggleSpan {
  /* position: absolute; */
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.3s;
  border-radius: 30px;
 }

 strong {
  position: absolute;
  left: 100%;
  width: max-content;
  height: 100%;
  line-height: 30px;
  margin-left: 10px;
  cursor: pointer;
 }

 label .toggleSpan:before {
  position: absolute;
  content: "";
  height: 25px;
  width: 25px;
  left: 3px;
  bottom: 2.6px;
  background-color: #fff;
  border-radius: 50%;
  transition: 0.3s;
 }

 input:checked + .toggleSpan {
  background-color: #00c853;
 }

 input:checked + .toggleSpan:before {
  transform: translateX(29px);
 }
`;
