import React from "react";
import ReactDOM from 'react-dom/client'
// import 

const parent = React.createElement('h1',{id:'parent'},'i am  parent ')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);