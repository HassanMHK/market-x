import Navbar from "../components/fullNavbar";
import CartItem from "../components/cartItem";
import ClearCartModal from "../components/clearCartModal";
import { openModal } from "../features/cart/clearCartModalSlice";
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {

const {cartItems, total, amount} = useSelector((store) => store.cart);
const {isOpen} = useSelector((store) => store.clearCartModal);
const editedTotal = total.toLocaleString("en-US");
const dispatch = useDispatch();

    if(amount < 1){
        return(
            <div className="market-container">
                <Navbar />
                <div className="cart-container">
                    <div className="cart">
                        <h1> Cart is Empty</h1>
                    </div>
                </div>
            </div>
        );
    }
    return(
        <div className="market-container">
            <Navbar />
            <div className="cart-container">
                <div className="cart">
                    <h1>Your Cart</h1>
                </div>
                <div className="cart-items-container">
                    {cartItems.map((item) => {
                        return  <CartItem {...item} key={item.id} />
                    })}
                </div>
                <div className="cart-line"></div>
                <div className='cart-price-container'>
                    <h3 className='cart-item-price'>Total:<span className="total-value">{editedTotal}</span> EGP</h3>
                </div>
                <div className="cart-btns">
                    <button className="checkout-cart-btn">Checkout</button>
                    <button className="clear-cart-btn" onClick={()=> {
                        dispatch(openModal());
                    }}>clear cart</button>
                </div>
            </div>
            {isOpen && <ClearCartModal />}
        </div>
    );

}

export default Cart;