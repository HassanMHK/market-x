import useFetch from '../useFetch';
import Sidebar from "../Sidebar";
import Item from "../Item";
import Navbar from "../Navbar";
import '../home.css';
import { useState } from 'react';

const Home = () => {
    const {data, isPending, error} = useFetch("/data.json");
    const [isSidebarActive, setSidebarActive] = useState(true);

    return(
        <div className='market-container'>
            <Navbar />
            <div className='home-container'>
                <div className='filter-bar'>
                    <button className='sidebar-btn' onClick={() => {
                        if(isSidebarActive){
                            setSidebarActive(false);
                        }else{
                            setSidebarActive(true);
                        }}}>
                        {isSidebarActive && <img src='sort.png'/>}
                        {!isSidebarActive && <img src='menu.png'/>}
                    </button>
                </div>
                <div className='home-main'>
                    <Sidebar checkSidebar={isSidebarActive} showSidebar={setSidebarActive}/>
                    <div className='main-section'>
                        {isPending && <h2>Loading...</h2>}
                        {error && <h2> { error } </h2>}
                        {data && <h2 className='product-type'>Laptops</h2>}
                        <div className='list-container'>
                            {data && data.map((product) => {
                                return (
                                    <Item {...product} key={product.id} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;