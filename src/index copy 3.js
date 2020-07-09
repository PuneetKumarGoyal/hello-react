import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [checked, setChecked] = useState(false);

  alert(`checked : ${checked.toString}`)
  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => {
          setChecked(checked => !checked)
        }}
      />
      {checked ? "checked" : "not checked"}
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
