import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

function ToggleSwitch() {
  const [checked, setChecked] = useState(true);

  const handleChange = val => {
    setChecked(val)
  }

  return (
    <div className="app" style={{textAlign: "right"}}>
      <ReactSwitch
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
}

export default ToggleSwitch;