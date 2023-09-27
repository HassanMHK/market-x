import { Link } from 'react-router-dom';
import { addToCart, calculateTotal } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from 'react-redux';

const Item = (props) => {
    const {img , name, price, id, changeItem} = props;
    const editedPrice = price.toLocaleString("en-US");

    const dispatch = useDispatch();

    const itemClick = () => {
        window.scrollTo(0, 0);
        if(changeItem !== undefined){
            changeItem();
        }
    }

    return (
        <div className='item-card' key={id}>
            <Link className="item-link" onClick={itemClick} to={`/products/${id}`}>
                <img className='item-img' src={img} alt='laptop'/>
                <h3 className='item-name'>{name}</h3>
            </Link>
            <div className='price-container'>
                <h5 className='item-currency'>EGP </h5>
                <h5 className='item-price'>{editedPrice}</h5>
            </div>
            <div className='addToCart' onClick={() => {
                dispatch(addToCart({id, img, name, price}));
                dispatch(calculateTotal());
            }}>
                <p>add to cart</p>
                <span className="material-symbols-outlined">shopping_bag</span>
            </div>
        </div>
    );
}

export default Item;