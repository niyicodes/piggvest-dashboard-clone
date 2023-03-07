import { useState } from "react";

import "./toggleSwitch.css";

export default function ToggleSwitch({ toggled, onClick }) {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <label style={{background : isToggled === true ? 'green' : null} }>
      <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
      <span className="toggleSpan"></span>
    </label>
  );
}
