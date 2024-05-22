import React, { Component } from "react";


//Create a class for the List
class List extends Component {
  
    render() {
  
      return (
        <ol>
          {this.props.elemList.map((ele, index) => <li key={index} > {ele} </li>)}
        </ol>)
    }
  }
  
  export default List