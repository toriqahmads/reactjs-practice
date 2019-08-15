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
import ParentComponent2 from './components/ParentComponent2';
import RefDemo from './components/RefDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import withCounter from './components/withCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';
import Counters from './components/Counters';
import { UserProvider } from './components/UserContext';
import ComponentC from './components/ComponentC';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <ErrorBoundary>
            <Hero heroName="Batman"></Hero>
          </ErrorBoundary>
          <ErrorBoundary>
            <Hero heroName="Superman"></Hero>
          </ErrorBoundary>
          <ErrorBoundary>
            <Hero heroName="Joker"></Hero>
          </ErrorBoundary> */}
            
          <PostForm />
          {/* <PostList /> */}
          {/* <UserProvider value="Toriq">
            <ComponentC />
          </UserProvider>
           */}
          {/* <Counters render={(count, incrementCount) => (
            <HoverCounter2 count={count} incrementCount={incrementCount} />
          )} />
          <Counters render={(count, incrementCount) => (
            <ClickCounter2 count={count} incrementCount={incrementCount} />
          )} /> */}

          {/* <ClickCounter2 />
          <HoverCounter2 />
          <User render={(isLoggedIn) => isLoggedIn ? 'Toriq' : 'Guest'} /> */}
          {/* <ClickCounter />
          <HoverCounter /> */}
          
          {/* <PortalDemo /> */}
          {/* <FRParentInput /> */}
          {/* <FocusInput /> */}
          {/* <RefDemo /> */}

          {/* <ParentComponent2 /> */}
          {/* <Table /> */}

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
