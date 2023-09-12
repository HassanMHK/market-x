import { Link } from "react-router-dom";
import { useState } from 'react';

const Navbar = ( {getData} ) => {
    const [input, setInput] = useState('');

    const getInput = (e) => {
        setInput(e.target.value);
    }

    const filterProducts = (e) => {
        if(e.type === "click" || e.keyCode === 13){
            getData(input);
        }
    }

    const reloadHome = () => {
        window.location.reload();
    }

    return (
        <>
            <nav className="nav-container">
                <div className="nav-content">
                    <div className="logo-container">
                        <Link className="market-title" to="/" onClick={reloadHome}>MarketX</Link>
                    </div>
                    <div className="search-container">
                        <div className="search-content">
                            <input type="search" id="search" autoComplete="off" spellCheck="false" placeholder="Search Products" onChange={getInput} onKeyDown={filterProducts}></input>
                            <button id="serach-btn" onClick={filterProducts}>search</button>
                        </div>
                    </div>  
                    <div className="nav-btns-container">
                        <Link className="nav-link" to="/login"><button className="nav-btn">Log in</button></Link>
                        <Link className="nav-link" to="/register"><button className="nav-btn">Register</button></Link>
                    </div>
                </div>
            </nav>
        </>
    );
};
  
export default Navbar;