import { Link } from 'react-router-dom';
import { removeItem, increase, decrease, calculateTotal } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const CartItem = (props) => {
    const {name, img, price, id, amount} = props;
    const {cartItems} = useSelector((store) => store.cart);
    const editedPrice = price.toLocaleString("en-US");
    const nameShort = name.slice(0, 30)+"...";
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(calculateTotal());
    }, [cartItems]);
    
    return(

        <div className='cart-item-card'>
            <div className='cart-item-left-section'>
                <img className='cart-item-img' src={img} alt='laptop'/>
            </div>
            <div className='cart-item-right-section'>
                <Link className="cart-item-link" to={`/products/`}>
                    <h3 className='cart-item-name'>Name: {nameShort}</h3>
                </Link>
                <div className='cart-item-price-container'>
                    <h5 className='cart-item-currency'>EGP </h5>
                    <h5 className='cart-item-price'>{editedPrice}</h5>
                </div>
                <div className='amount'>
                    <span className="material-symbols-outlined" onClick={() => {
                        dispatch(increase({id}));
                        // dispatch(calculateTotal());
                        }}>add_box</span>
                    <h5 className='amount-value'>{amount}</h5>
                    <span className="material-symbols-outlined" onClick={() => {
                        if(amount === 1){
                            dispatch(removeItem(id));
                            // dispatch(calculateTotal());
                        }else{
                            dispatch(decrease({id}));
                            // dispatch(calculateTotal());
                        }
                        }}>indeterminate_check_box</span>
                </div>
                <button className='cart-item-remove-btn' onClick={() => {
                    dispatch(removeItem(id));
                    // dispatch(calculateTotal());
                    }}><span class="material-symbols-outlined">
                    delete
                    </span></button>
            </div>
        </div>
    );

}

export default CartItem;