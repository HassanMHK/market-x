import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import ItemDetails from './pages/ItemDetails';
import NoPage from './pages/NoPage';
// import UserNavbar from "./UserNavbar";
import Footer from './footer';
import Search from './pages/Search';

function App() {
  
  return (
      <>
          <Router>
            <Routes>
              <Route path='/register' element={<Register />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/' element={<Home />}/>
              <Route path='/products/:id' element={<ItemDetails />}/>
              <Route path='/search' element={<Search />}/>
              <Route path='*' element={<NoPage />}/>
            </Routes>
          </Router>
          <Footer />
      </>
  );
}

export default App;