// import useFetch from '../useFetch';
// import useGetFetch from '../useGetFetch';
import useJsonFetch from '../useJsonFetch';
import Sidebar from "../Sidebar";
import Item from "../Item";
import '../home.css';
import { useState } from 'react';

const Home = () => {
    // const {dataG, isPendingG, errorG} = useGetFetch("http://localhost:8000/");
    const {dataJ, isPendingJ, errorJ} = useJsonFetch("\data.json");
    // const {data, isPending, error} = useFetch('/');
    const [isSidebarActive, setSidebarActive] = useState(true);

    return(
        <>
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
                        {isPendingJ && <h2>Loading...</h2>}
                        {errorJ && <h2> { errorJ } </h2>}
                        {dataJ && <h2 className='product-type'>Laptops</h2>}
                        <div className='list-container'>
                            {dataJ && dataJ.map((product) => {
                                return (
                                    <Item {...product} key={product.id} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;