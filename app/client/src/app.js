import React, { Component } from "react";
import Comp from './comp.jsx';
import picca from './abs.jpg';
import './app.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <div id="app-container">
        {/* <img src={picca}/> */}
        <Comp/>      
      </div>
    );
  }
}
