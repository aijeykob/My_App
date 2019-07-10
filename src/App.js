import React, { Component,Fragment } from 'react';
import './App.css';
import Header from './components/Header'; 
import Nav from './components/Nav';
import Content from './components/Content';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [
        {name:"Weake up"}
      ]
    };
  }
  render() {
    return (
      <Fragment>
         <div className="app-wrapper">
        <Header/>
        <Nav className="nav" />
        <Content  />

      </div>
      </Fragment>
     
    );
    }
  }
