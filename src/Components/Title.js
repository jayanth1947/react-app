import React, { Component } from "react";

//Create a class for the Title
class Title extends Component {

    render() {
      return (
        <h1>{this.props.title}</h1>
      )
    }
  }


export default Title