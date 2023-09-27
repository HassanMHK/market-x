import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Navbar = ( {getData} ) => {
    const [input, setInput] = useState('');
    const amount = useSelector((store) => {
        return store.cart.amount;
    });
    const navigate = useNavigate();

    const getInput = (e) => {
        setInput(e.target.value);
    }

    const filterProducts = (e) => {
        if(e.type === "click" || e.keyCode === 13){
            getData(input);
        }
    }

    // const reloadHome = () => {
    //     window.location.reload();
    // }

    return (
        <>
            <nav className="nav-container">
                <div className="nav-content">
                    <div className="logo-container">
                        <Link className="market-title" to="/">MarketX</Link>
                    </div>
                    <div className="search-container">
                        <div className="search-content">
                            <input type="search" id="search" autoComplete="off" spellCheck="false" placeholder="Search Products" onChange={getInput} onKeyDown={filterProducts}></input>
                            <button id="serach-btn" onClick={filterProducts}>search</button>
                        </div>
                    </div>
                    <div className="nav-btns-container">
                        <div className="shopping-cart">
                            <span className="material-symbols-outlined" onClick={() => {navigate('/cart')}}>shopping_cart</span>
                            <div className="cart-amount"><p>{amount}</p></div>
                        </div>
                        <Link className="nav-link" to="/login"><button className="nav-btn">Log in</button></Link>
                        <Link className="nav-link" to="/register"><button className="nav-btn">Register</button></Link>
                    </div>
                </div>
            </nav>
            <div className="second-bar-smallView">
                <div className="search-container-smallView">
                    <div className="search-content">
                        <input type="search" id="search" autoComplete="off" spellCheck="false" placeholder="Search Products" onChange={getInput} onKeyDown={filterProducts}></input>
                        <button id="serach-btn" onClick={filterProducts}>search</button>
                    </div>
                </div>
            </div>
        </>
    );
};
  
export default Navbar;