import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import useGetFetch from "../useGetFetch";
import Item from "../Item";
import "../home.css";

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
  const [random, setRandom] = useState([]);
  const { data, isPending, error } = useFetch(`/products/${id}`);
  const { dataG, isPendingG, errorG } = useGetFetch("http://localhost:8000/");

  const changeItem = () => {
    setLoaded(false);
  }

  useEffect(() => {
    setLoaded(true);
    if(dataG){
      // 10 random numbers within products length saved in an array
      // product details id not included in the random numbers
      const random = [];
      for(let i=0; i<similarItemsNumber; i++){
        let randomNumber = Math.floor((Math.random() * dataG.length))+1;
        while((randomNumber === Number(id)) || (random.includes(randomNumber))){
          randomNumber = Math.floor((Math.random() * dataG.length))+1;
        }
        random[i] = randomNumber;
      }
      setRandom(random);
    }
  },[data]);


  return (
    <>
      <div className="msg-title-container">
        {( isPending || !loaded) && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
      </div>
      {/* <Product img={product.img} name={product.name} price={product.price} key={product.id} /> */}
      {/* spread operator */}
      {data && loaded && <Product {...data} key={data.id} />}
      {/* {!isPendingG && !loaded && <h2 className="similar-title">Loading...</h2>} */}
      {data && dataG && !isPendingG && loaded && <h2 className="similar-title">Similar items</h2>}
      {/* {errorG && <h2 className="similar-title">{errorG}</h2>} */}
      {data && dataG && loaded &&
        <>
          <div className="seeMore-list-container">
            {(random !== []) && dataG.map((product) => {
                if(product.id !== Number(id)){
                  // loop to add similaritems matching the random numbers in random useState
                  for(let i=0; i<similarItemsNumber; i++){
                    if(product.id === random[i]){
                      return <Item {...product} key={product.id} changeItem={changeItem}/>;
                    }
                  }
                }
              })}
          </div>
        </>
      }
    </>
  );

};

export default ItemDetails;
