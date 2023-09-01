import CartItem from "./CartItem";

const Cart = (props) => {
    const {array} = props;
    console.log(array);
    
    return ( 
        <>
            <div className="cart-container">
            {/* {isPending && <h2>Loading...</h2>}
            {error && <h2> { error } </h2>} */}
            <h2>Cart</h2>
            <div className='cart-list-container'>
            {array && array.map((product) => {
                if(product != null){
                    return <CartItem {...product} key={product.id} />
                }
            })}
            </div>
            </div>
        </>
     );
}
 
export default Cart;