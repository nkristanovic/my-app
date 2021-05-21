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
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') !== null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    localStorage.getItem('authToken') !== null && setIsLoggedIn(true);
    localStorage.getItem('isAdmin') !== null && setIsAdmin(JSON.parse(localStorage.getItem('isAdmin')));
  }, [isAdmin, isLoggedIn]);
  
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
            <Route path="/login" render={() => <Login setIsAdmin={setIsAdmin} setIsLoggedIn={setIsLoggedIn} />} />
            <ProtectedRoute  isLoggedIn={isLoggedIn} isAdmin={isAdmin} path="/admin" component={Admin} />
          </Switch>
          </Main>
          <Footer />
        </BrowserRouter>
      </>
    );
}

export default App;



