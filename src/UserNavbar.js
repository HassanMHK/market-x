import { Link } from "react-router-dom";
const UsrNav = (props) => {
    return (
        <>
            <nav className="nav-container">
                <div className="logo-container">
                    <Link className="market-title" to="/">MarketX</Link>
                </div>
                <div className="nav-btns-container">
                    <Link className="nav-link" to="/logout"><button className="nav-btn">Log out</button></Link>
                </div>
            </nav>
        </>
    );
};

const UserNavbar = (props) => {
    return (
        <>
            <UsrNav />
        </>
    );
};
  
export default UserNavbar;