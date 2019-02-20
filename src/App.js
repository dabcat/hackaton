import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './containers/Home/Home';
import Chat from './containers/Chat/Chat';

import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header></Header>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/chat" component={Chat} />
          </div>
        </Layout>
      </Router>
    );
  }
}

export default App;
