import React from "react";
import { ReactDOM } from "react";
import { render } from 'react-dom';

//For Header element
const element = React.createElement('h1', null, 'Hello world');

// For Paragraph element
const paraElement = React.createElement('p', null, 'The world is so beautiful');

const elemList = ['Mango', 'Apple', 'Banana'];



// For Order List elements
const listElement = React.createElement('ol', null,
  elemList.map((ele) => React.createElement('li', null, ele)));

// List using index
const newlistElement = React.createElement('ol', null,
  elemList.map((ele,index) => React.createElement('li', { key: index }, ele)));


// Render the above elements in the browser
render(element, document.getElementById('root'));
render(paraElement, document.getElementById('root'));
render(newlistElement, document.getElementById('root'));

