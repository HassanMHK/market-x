import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../functions/useFetch";
import Item from "../components/Item";
import NavbarClean from "../components/cleanNavbar";

const similarItemsNumber = 10;

const Product = (product) => {
  const editedPrice = product.price.toLocaleString("en-US");
  return (
    <div className="details-item-container">
      <img className="item-img-details" src={product.img} alt="laptop"/>
      <div className="right-details">
        <h3 className="item-name-details">{product.name}</h3>
        <p className="item-info-details">{product.info}</p>
        <div className="item-price-container">
          <h5 className="item-currency-details">EGP </h5>
          <h5 className="item-price-details">{editedPrice}</h5>
        </div>
      </div>
    </div>
  );
};

const ItemDetails = () => {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(true);
  const [random, setRandom] = useState(null);
  const { data, isPending, error } = useFetch("/data.json");
  const [products, setproducts] = useState(null);

  const changeItem = () => {
    // setLoaded(false);
    setproducts(data);
  }

  useEffect(() => {
    setproducts(data);
  },[data]);

  useEffect(() => {
    setLoaded(true);
    if(data){
      // 10 random numbers within products length saved in an array
      // product details id not included in the random numbers
      const random = [];
      for(let i=0; i<similarItemsNumber; i++){
        let randomNumber = Math.floor((Math.random() * data.length))+1;
        while((randomNumber === Number(id)) || (random.includes(randomNumber))){
          randomNumber = Math.floor((Math.random() * data.length))+1;
        }
        random[i] = randomNumber;
      }
      setRandom(random);
    }
  },[products]);


  return (
    <div className='market-container'>
      <NavbarClean />
      <div className="msg-title-container">
        {( isPending || !loaded) && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
      </div>
      {/* <Product img={product.img} name={product.name} price={product.price} key={product.id} /> */}
      {/* spread operator */}
      {data && loaded && data.map((product) => {
        if(product.id === Number(id)){
          return <Product {...product} key={product.id} />;
        }
      })}
      {data && data && !isPending && loaded && <h2 className="similar-title">Similar items</h2>}
      {data && data && loaded &&
      <div className="similar-products-container">
        <div className="products">
          {(random) && data.map((product) => {
              if(product.id !== Number(id)){
                // loop to add similaritems matching the random numbers in random useState
                console.log(random);
                for(let i=0; i<similarItemsNumber; i++){
                  if(product.id === random[i]){
                    return <Item {...product} key={product.id} changeItem={changeItem}/>;
                  }
                }
              }
            })}
        </div>
      </div>}
    </div>
  );

};

export default ItemDetails;
