import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hallo from './components/Hallo'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
// style from .css
import './appStyle.css'
// style from .css module
import styles from './appStyle.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Table />

          {/* <LifeCycleA /> */}
          {/* style from .css */}
          {/* <h1 className="error">Error</h1> */}
          {/* style from .css module*/}
          {/* <h1 className={styles.success}>Success</h1> */}
          {/* <StyleSheet primary="true"/> */}
          {/* <Inline /> */}
          {/* <NameList /> */}
          {/* <UserGreeting /> */}
          {/* <ParentComponent /> */}
          {/* <EventBind /> */}
          {/* <Greet name="Toriq" heroName="Iron Man"></Greet>
          <FunctionClick />
          <ClassClick />
          <Greet name="Toriq" heroName="Iron Man">
            <p>This is a children props</p>
          </Greet>
          <Greet name="Edo" heroName="Spiderman">
            <button>action</button>
            <p>action</p>
          </Greet>
          <Greet name="Willy" heroName="Batman"/>
          <Welcome name="Toriq" heroName="Iron Man"/>
          <Welcome name="Edo" heroName="Spiderman"/>
          <Welcome name="Willy" heroName="Batman"/> 
          <Counter addValue="5" /> */}
        </header>
      </div>
    );
  }
}

export default App;
