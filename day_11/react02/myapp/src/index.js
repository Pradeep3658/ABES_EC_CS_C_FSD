import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// const reactElementStyle = {
//   height: "200px",
//   width:"200px",
//   backgroundColor: "grey"
// }
const reactElement = <div style={{ backgroundColor: "beige" }}>Hello React Learners!</div>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* {App()}
    <App></App> */}
    <App/>
  </>
);

