import { Link } from 'react-router-dom';
import './home.css';

const CartItem = (props) => {
    const {img , name, price, id, addToCart} = props;
    // console.log(props);


    return (
            <div className='cart-item-card' key={id}>
                <Link className="cart-item-link" to={`/products/${id}`}>
                    <img className='cart-item-img' src={img} />
                    <h3 className='cart-item-name'>{name}</h3>
                </Link>
                <h5 className='cart-item-price'>EGP {price}</h5>
                <button className='cart-item-btn' onClick={(e) => {e.preventDefault();addToCart(id);}} >Remove</button>
            </div>
    );
}

export default CartItem;