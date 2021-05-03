import React from 'react';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header'; 
import { Main } from './lib/style/generalStyles';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Event from './pages/Event/Event';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
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
            <Route path="/event/:id" component={Event} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
          </Main>
          <Footer />
        </BrowserRouter>
      </>
    );
}

export default App;



