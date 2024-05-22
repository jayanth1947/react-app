import React, { Component } from "react";
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
  elemList.map((ele, index) => React.createElement('li', { key: index }, ele)));



// JSX => It looks like a syntax of the HTML
//Here we are embedding the array inside the JSX and this prints the array as we expected

const newJSXElement =
  <div>
    <h1>New List</h1>
    <ol>
      {elemList.map((ele, index) => <li key={index} > {ele}</li>)}
    </ol>
  </div>


//Create a class for the List
class List extends Component {

  render() {

    return (
      <ol>
        {elemList.map((ele, index) => <li key={index} > {ele} </li>)}
      </ol>)
  }
}


//Create a class for the Title
class Title extends Component {

  render() {
    return (
      <h1>Task List</h1>
    )
  }
}


//Create a class for the Main DOM to run by embedding all the components
class Main extends Component {
  render() {

    return (
      <div>
        <Title />
        <List />
      </div>
    )
  }
}



// Render the above elements in the browser
//render(element, document.getElementById('root'));
//render(paraElement, document.getElementById('root'));
render(<Main />, document.getElementById('root'));

