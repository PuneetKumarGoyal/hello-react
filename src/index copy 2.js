import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [year, setYear] = useState(2000);
  const [manager, setManager] = useState("Alex");
  const [status, setStatus] = useState("Open");
  return (
    <>
      <div>
        <h1>Year : {year}</h1>
        <button onClick={() => setYear(year + 1)}>Increase</button>
      </div>
      <div>
        <h1>Manager : {manager}</h1>
        <button onClick={() => setManager("Rachel")}>New Manager</button>
      </div>
      <div>
        <h1>Status : {status}</h1>
        <button onClick={() => setStatus("closed")}>Closed</button>
        <button onClick={() => setStatus("Back in 5 minutes")}>Break</button>
        <button onClick={() => setStatus("open")}>Open</button>
      </div>

    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
