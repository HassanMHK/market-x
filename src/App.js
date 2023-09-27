import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import ItemDetails from './pages/ItemDetails';
import Search from './pages/Search';
import NoPage from './pages/NoPage';
// import NavbarClean from './components/cleanNavbar';
import Footer from './components/footer';
import Cart from '../src/pages/cart';

function App() {
  return (
      <div className='app'>
        <Router>
          <Routes>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/' element={<Home />}/>
            <Route path='/products/:id' element={<ItemDetails />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/search' element={<Search />}/>
            <Route path='*' element={<NoPage />}/>
          </Routes>
        </Router>
        <Footer />
      </div>
  );
}

export default App;