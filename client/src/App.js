import React, { Component } from "react";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Layout from './pages/Layout';
import Home from './pages/Home';

import "./css/styles.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/home"} component={Home} />
          </Switch>
        </Layout>        
      </Router>
    );
  }
}

export default App;
