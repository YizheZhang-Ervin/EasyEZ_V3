import React from 'react';
import Home from './components/Home';
import './App.css';
import { Route } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
