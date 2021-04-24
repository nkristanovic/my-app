import React from 'react';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header'; 
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Event from './pages/Event/Event';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App = () => {
    return (
      <>
       <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/events" component={Events} />
            <Route path="/event" component={Event} />
          </Switch>
          </Main>
          <Footer />
        </BrowserRouter>
      </>
    );
}

export default App;



