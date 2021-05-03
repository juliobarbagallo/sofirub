import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/HomePage/Home';
import Editorial from './components/EditorialPage/Editorial';
import Beauty from './components/BeautyPage/Beauty';
import Grooming from './components/Grooming';
import Advertising from './components/Advertising';
import Instagram from './components/InstagramPage/Instagram'
import Contact from './components/ContactPage/Contact'
// import { Box, Container,} from '@chakra-ui/react';


function App() {
  return (
    
    <>

    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/editorial" component={Editorial} />
        <Route path="/beauty" component={Beauty} />
        <Route path="/grooming" component={Grooming} />
        <Route path="/advertising" component={Advertising} />
        <Route path="/instagram" component={Instagram} />
        <Route path="/contact" component={Contact} />
      </Switch>
    
    
      
    </Router>
    </>
  );
}

export default App;
