import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="nav-container">
                <div className="logo-container">
                    <Link className="market-title" to="/">MarketX</Link>
                </div>
                <div className="nav-btns-container">
                    <Link className="nav-link" to="/login"><button className="nav-btn">Log in</button></Link>
                    <Link className="nav-link" to="/register"><button className="nav-btn">Register</button></Link>
                </div>
            </nav>
        </>
    );
};
  
export default Navbar;