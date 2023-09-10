import useFetch from '../useFetch';
import Sidebar from "../Sidebar";
import Item from "../Item";
import NavbarHome from "../NavbarHome";
import '../home.css';
import { useEffect, useState } from 'react';

const Home = () => {
    const {data, isPending, error} = useFetch("/data.json");
    const [isSidebarActive, setSidebarActive] = useState(true);
    const [productsData, setProductsData] = useState([]);
    const [dataChanged, setDataChanged] = useState(true);
    const [filter, setFilter] = useState(false);
    const [lowToHigh, setLowToHigh] = useState(true);

    useEffect(() => {
        if(dataChanged){
            setProductsData(data);
            setDataChanged(false);
        }
    }, [data]);

    // Filter by price
    const priceFilter = (e) => {
        if(e.target.value === "low-filter"){
            const lowPrice = data.sort((a, b) => a.price - b.price);
            setProductsData(lowPrice);
            setFilter(true);
            setLowToHigh(true);
        }else if(e.target.value === "high-filter"){
            const highPrice = data.sort((a, b) => b.price - a.price);
            setProductsData(highPrice);
            setFilter(true);
            setLowToHigh(false);
        }
    }

    // Get Search input and filter the data
    const getSearchInput = (searchInput) => {
        const filterSearch = (product) => 
            [product.name, product.info]
                .join(' ')
                .toLowerCase()
                .indexOf(searchInput.toLowerCase()) !== -1
        ;
        let filteredData = data.filter(filterSearch);
        setFilter(true);
        setProductsData(filteredData);
    }

    // Get Brand filter
    const getBrand = (brand) => {
        const filterSearch = (product) => 
            [product.name, product.info]
                .join(' ')
                .toLowerCase()
                .indexOf(brand.toLowerCase()) !== -1
        ;
        let filteredData = data.filter(filterSearch);
        setFilter(true);
        setProductsData(filteredData);
    }

    return(
        <div className='market-container'>
            <NavbarHome getData={getSearchInput} />
            <div className='home-container'>
                <div className='filter-bar'>
                    <button className='sidebar-menuBtn' onClick={() => {
                        if(isSidebarActive){
                            setSidebarActive(false);
                        }else{
                            setSidebarActive(true);
                        }}}>
                        {isSidebarActive && <img src='sort.png'/>}
                        {!isSidebarActive && <img src='menu.png'/>}
                    </button>
                    <div className='filter-btns'>
                        <button className='filter-btn' value={"low-filter"} onClick={priceFilter}>Price: Low to High</button>
                        <button className='filter-btn' value={"high-filter"} onClick={priceFilter}>Price: High to Low</button>
                    </div>
                </div>
                <div className='home-main'>
                    <Sidebar checkSidebar={isSidebarActive} showSidebar={setSidebarActive} getData={getBrand} />
                    <div className='main-section'>
                        {isPending && <h2>Loading...</h2>}
                        {error && <h2> { error } </h2>}
                        {data && <h2 className='product-type'>Laptops</h2>}
                        <div className='list-container'>
                        {data && !filter && data.map((product) => {
                            return (
                                <Item {...product} key={product.id} />
                            );
                        })}
                        {productsData && filter && productsData.map((product) => {
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