import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const NavbarClean = () => {
    const amount = useSelector((store) => {
        return store.cart.amount;
    });
    const navigate = useNavigate();

    return (
        <>
            <nav className="nav-container">
                <div className="nav-content">
                    <div className="logo-container">
                        <Link className="market-title" to="/">MarketX</Link>
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
        </>
    );
};
  
export default NavbarClean;