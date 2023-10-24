
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom';
import UserProfileCreation from './UserProfileCreation';
import Profile from './Profile';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <div className='content'>
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={UserProfileCreation} />
          <Route path="/profile" component={Profile} />
        </Switch>
        <Link to="/">Back to Login</Link>
      </div>
    </Router>
    </div>
    </div> 
  );
} 


export default App;
