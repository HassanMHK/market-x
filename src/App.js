import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import ItemDetails from './pages/ItemDetails';
import NoPage from './pages/NoPage';
import Navbar from "./Navbar";
// import UserNavbar from "./UserNavbar";
import Footer from './footer';
// import './App.css';

function App() {
  
  return (
      <>
          <Router>
            <Switch>
              <Route path='/register'>
                <div className='log-reg-container'>
                  <Navbar />
                  <Register />
                </div>
              </Route>
              <Route path='/login'>
                <div className='log-reg-container'>
                  <Navbar />
                  <Login />
                </div>
              </Route>
              <Route exact path='/'>
                <div className='market-container'>
                  {/* <UserNavbar /> */}
                  <Navbar />
                  <Home />
                </div>
              </Route>
              <Route path='/products/:id'>
                <div className='market-container'>
                  <Navbar />
                  <ItemDetails />
                </div>
              </Route>
              <Route path="*">
                <Navbar />
                <NoPage />
              </Route>
            </Switch>
          </Router>
          <Footer />
      </>
  );
}

export default App;