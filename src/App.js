import React, { useEffect, useState } from 'react';
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
import Admin from './pages/Admin/Admin';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('isAdmin') === 'true') {
      setIsAdmin (true);
    } else {
      setIsAdmin (false)
    };
    if (localStorage.getItem('authToken')) {
      setIsLoggedIn (true);
    } else {
      setIsLoggedIn (false)
    };
  }, []);
    return (
      <>
       <BrowserRouter>
          <ScrollToTop />
          <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/events" component={Events} />
            <Route path="/event/:id" component={Event} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/admin" component={Admin} />
          </Switch>
          </Main>
          <Footer />
        </BrowserRouter>
      </>
    );
}

export default App;



