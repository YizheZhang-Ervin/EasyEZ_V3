import React from 'react';
import Home from './components/Home';
import Welcome from './components/Welcome';
import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { BackTop } from 'antd';
import Error from './components/error'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/home" component={Home} />
        <Route path='*' component={Error}/>
      </Switch>
      </BrowserRouter>
      <BackTop />
    </div>
  );
}

export default App;
