import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header';
import Hooks from './Hooks';
import Class from './Class';
import Home from './Home';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/hooks" component={Hooks} />
        <Route path="/class" component={Class} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
