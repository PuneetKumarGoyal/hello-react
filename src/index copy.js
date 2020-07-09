import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {
  name: "Madrid",
  country: "Spain"
};

// function Hello() {
//   return (
//     <div>
//       <h1>Welcome to React!</h1>
//       <p>Lets build something</p>
//     </div>
//   )
// }
function Hello(props) {
  console.log(props)
  console.log(Object.keys(props))
  return (
    <div>
      <h1>Welcome to {props.library}!</h1>
      <p>{props.message}</p>
      <p>{props.number}</p>
      <p>{Object.keys(props).length} Props Total</p>
    </div>
  )
}
function Hello1({ library, message, number }) {
  return (
    <div>
      <h1>Welcome to {library}!</h1>
      <p>{message}</p>
      <p>{number}</p>
    </div>
  )
}

function Lake(props) {
  return (
    <p>Lake {props.name}</p>
  )
}

function SkiResort(props) {
  return (
    <p>SkiResort {props.name}</p>
  )
}
const lakelist = [
  "baikal lake",
  "Psong tso",
  "dumdum lake"
];

function App({ lakes }) {
  return (
    <React.Fragment>
      <Lake name="Bd e" />
      <SkiResort name="swiss Mountain" />
    </React.Fragment>
  )
}
// function App({ lakes }) {
//   return (
//     <ul>
//       {lakes.map(lake => (
//         <p key={lake}>{lake}</p>
//       ))}
//     </ul>
//   )
// }
// function App() {
//   return (
//     <div>
//       <Lake name="1"></Lake>
//       <Lake name="2"></Lake>
//       <Lake name="3"></Lake>
//     </div>
//   )
// }


ReactDOM.render(
  //React.createElement("div", { style: { color: "red" } }, "hellooo"),
  /*<ul>
    <l1>Hot Dogs</l1>
    <l1>Burgers</l1>
    <l1>Pizza</l1>
    <l1>Cold drink</l1>
  </ul>*/
  /*<div>
    <h1 id="heading" className="cool-text">Hello from {city.name} in {city.country}</h1>
    <h1 id="heading" >Hello from {city.name} in {city.country}</h1>
  </div>*/
  // <Hello library="react" message="Have fun!" number={1} />
  // <App />
  <App lakes={lakelist} />
  ,
  document.getElementById('root')
);
