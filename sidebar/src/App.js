import './App.css';
import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Videos from './pages/Videos';
import Home from './pages/Home';
import Trending from './pages/Trending';
import Streamer from './pages/Streamer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/trending' component={Trending}/>
          <Route path='/video' component={Videos}></Route>
          <Route path='/streamer' component={Streamer}></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
