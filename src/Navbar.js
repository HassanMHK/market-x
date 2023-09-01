import { Link } from "react-router-dom";
const Nav = (props) => {
    return (
        <>
            <nav className="nav-container">
                <div className="logo-container">
                    <Link className="market-title" to="/">MarketX</Link>
                </div>
                <div className="nav-btns-container">
                    {/* <button className="nav-btn"><Link className="nav-link" to="/login">Login</Link></button> */}
                    <Link className="nav-link" to="/login"><button className="nav-btn">Log in</button></Link>
                    <Link className="nav-link" to="/register"><button className="nav-btn">Register</button></Link>
                </div>
            </nav>
        </>
    );
};

const Navbar = (props) => {
    return (
        <>
            <Nav />
        </>
    );
};
  
export default Navbar;