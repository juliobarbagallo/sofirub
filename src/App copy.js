import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Editorial from './components/Editorial';
import Beauty from './components/Beauty';
import {
  Box,
  
} from '@chakra-ui/react';

function App() {
  return (
    
    <>
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/editorial" component={Editorial} />
        <Route path="/beauty" component={Beauty} />
      </Switch>
      <Box p={4}>Main Content Here</Box>
    </Router>
    </>
  );
}

export default App;
