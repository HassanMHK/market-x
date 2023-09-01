
const SidebarLinks = () => {
    return (
        <>
            <p>HP</p>
            <p>ASUS</p>
            <p>acer</p>
            <p>msi</p>
            <p>SAMSUNG</p>
            <p>Microsoft</p>
            <p>HEWLETT PACKARD</p>
            <p>See more</p>

            <p>Laptop Price</p>

            <p>Under $500</p>
            <p>$500 to $600</p>
            <p>$600 to $700</p>
            <p>$700 to $800</p>
            <p>$1000 & Above</p>

            <p>Deals & Discounts</p>

            <p>All Discounts</p>
            <p>Today's Deals</p>

            <p>New Releases</p>

            <p>Last 30 days</p>
            <p>Last 90 days</p>

            <p>Laptop CPU Manufacturer</p>

            <p>AMD</p>
            <p>Apple</p>
            <p>ARM</p>
            <p>Intel</p>
            <p>Media Tek</p>
            <p>NVIDIA</p>
            <p>Qualcomm</p>
            <p>See more</p>

            <p>Computer Operating System</p>

            <p>Windows 11 Home</p>
            <p>Windows 11 Pro</p>
            <p>Windows 11 in S mode</p>
            <p>Windows Legacy System</p>
            <p>Mac OS</p>
            <p>Chrome OS</p>
            <p>Linux</p>

            <p>Recommended Uses For Product</p>

            <p>Business</p>
            <p>Education</p>
            <p>Everyday Use</p>
            <p>Gaming</p>
            <p>Multimedia</p>
            <p>Personal</p>
            <p>Photo Editing</p>
            <p>See more</p>

            <p>Theme</p>

            <p>Anime</p>
            <p>Candy</p>
            <p>Christmas</p>
            <p>Drops</p>
            <p>Rainbow</p>

            <p>Style</p>

            <p>Classic</p>
            <p>Contemporary</p>
            <p>Retro</p>
            <p>Steampunk</p>
            <p>Vintage</p>
        </>
    );
}

const Sidebar = (props) => {
    
    const {checkSidebar} = props;

    if(checkSidebar){
        return ( 
            <div className={"sidebar"}>
                <SidebarLinks />
            </div>
        );
    }
    else{
        return ( 
            <div className={"hide-sidebar"}>
                <SidebarLinks />
            </div>
        );
    }
}
 
export default Sidebar;