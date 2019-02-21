import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './containers/Home/Home';
import Dashboard from './containers/Dashboard/Dashboard';
import Chat from './containers/Chat/Chat';
import ConversationOne from './containers/ConversationOne/ConversationOne';
import ConversationTwo from './containers/ConversationTwo/ConversationTwo';

import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';

class App extends Component {
  userLoggedin(user) {
    console.log(user)
  }
  render() {
    return (
      <Router>
        <Layout>
          <Header></Header>
          <div className="App">
            <Route exact path="/" render={(props) => <Home {...props} handleUser={(user) => this.userLoggedin(user)} />} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/chat" component={Chat} />
            <Route path="/chat/1" component={ConversationOne} />
            <Route path="/chat/2" component={ConversationTwo} />
          </div>
        </Layout>
      </Router>
    );
  }
}

export default App;
