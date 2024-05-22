import React from "react";
import { ReactDOM } from "react";
import { render } from 'react-dom';

//For Header element
const element = React.createElement('h1', null, 'Hello world');

// For Paragraph element
const paraElement = React.createElement('p', null, 'The world is so beautiful');


// For Order List elements
const listElement = React.createElement('ol', null,
  React.createElement('li',null,'Mango'),
  React.createElement('li',null,'Apple'),
  React.createElement('li',null,'Banana'),);


// Render the above elements in the browser
render(element, document.getElementById('root'));
render(paraElement, document.getElementById('root'));
render(listElement, document.getElementById('root'));

