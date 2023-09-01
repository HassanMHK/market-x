import { Link } from 'react-router-dom';
import './home.css';

const Item = (props) => {
    const {img , name, price, id} = props;

    const editedPrice = price.toLocaleString("en-US");

    return (
        <div className='item-card' key={id}>
            <Link className="item-link" to={`/products/${id}`}>
                <img className='item-img' src={img} />
                <h3 className='item-name' onClick={window.scrollTo(0, 0)}>{name}</h3>
            </Link>
            <div className='price-container'>
                <h5 className='item-currency'>EGP </h5>
                <h5 className='item-price'>{editedPrice}</h5>
            </div>
        </div>
    );
}

export default Item;