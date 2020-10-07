import React from 'react';
import Home from './components/Home';
import Welcome from './components/Welcome';
import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { BackTop } from 'antd';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/blog" component={Blog} />
      </BrowserRouter>
      <BackTop />
    </div>
  );
}

export default App;
