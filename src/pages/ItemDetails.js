import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import useGetFetch from "../useGetFetch";
import Item from "../Item";
import "../home.css";

const Product = (product) => {
  const editedPrice = product.price.toLocaleString("en-US");
  return (
    <div className="details-item-container">
      <img className="item-img-details" src={product.img} />
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
  const { data, isPending, error } = useFetch(`/products/${id}`);
  const { dataG, isPendingG } = useGetFetch("http://localhost:8000/");
  return (
    <>
      <div className="msg-title-container">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </div>
      {/* <Product img={product.img} name={product.name} price={product.price} key={product.id} /> */}
      {/* spread operator */}
      {data && <Product {...data} key={data.id} />}
      {isPendingG && <h2 className="similar-title">Loading...</h2>}
      {data && !isPendingG && <h2 className="similar-title">Similar items</h2>}
      {data && dataG &&
        <>
          <div className="seeMore-list-container">
            {dataG.map((product) => {
                if (product.id <= 3) {
                  return <Item {...product} key={product.id} />;
                }
              })}
          </div>
        </>
      }
    </>
  );
};

export default ItemDetails;
