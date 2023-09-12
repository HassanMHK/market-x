
const SidebarLinks = ( {getBrand} ) => {

    const getInput = (e) => {
        getBrand(e.target.innerText);
    }

    return (
        <div className="sidebarBtns-container">
            <button className="sidebar-btn" onClick={getInput}>HP</button>
            <button className="sidebar-btn" onClick={getInput}>Lenovo</button>
            <button className="sidebar-btn" onClick={getInput}>ASUS</button>
            <button className="sidebar-btn" onClick={getInput}>MSI</button>
            <button className="sidebar-btn" onClick={getInput}>Dell</button>
            <button className="sidebar-btn" onClick={getInput}>acer</button>
            <button className="sidebar-btn" onClick={getInput}>Apple</button>
            <button className="sidebar-btn" onClick={getInput}>SAMSUNG</button>
            <button className="sidebar-btn" onClick={getInput}>Microsoft</button>
            <button className="sidebar-btn" onClick={getInput}>Gigabyte</button>
            <button className="sidebar-btn" onClick={getInput}>Panasonic</button>
            <button className="sidebar-btn" onClick={getInput}>LG</button>
            <button className="sidebar-btn" onClick={getInput}>Intel</button>
        </div>
    );
}

const Sidebar = (props) => {
    
    const {checkSidebar, getData} = props;

    if(checkSidebar){
        return ( 
            <div className={"sidebar"}>
                <h5 className="sidebar-filter-header">Filter by brand:</h5>
                <SidebarLinks getBrand={getData} />
            </div>
        );
    }
    else{
        return ( 
            <div className={"hide-sidebar"}>
                <SidebarLinks getBrand={getData} />
            </div>
        );
    }
}
 
export default Sidebar;