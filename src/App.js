import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './containers/Home/Home';
import Dashboard from './containers/Dashboard/Dashboard';
import Chat from './containers/Chat/Chat';
import ConversationOne from './containers/ConversationOne/ConversationOne';
import ConversationTwo from './containers/ConversationTwo/ConversationTwo';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/chat" component={Chat} />
            <Route path="/chat/1" component={ConversationOne}  />
            <Route path="/chat/2" component={ConversationTwo}  />
          </div>
      </Router>
    );
  }
}

export default App;
