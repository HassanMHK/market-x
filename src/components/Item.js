import { Link } from 'react-router-dom';

const Item = (props) => {
    const {img , name, price, id, changeItem} = props;
    const editedPrice = price.toLocaleString("en-US");
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
        </div>
    );
}

export default Item;