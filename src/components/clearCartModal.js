import { useDispatch } from "react-redux";
import { closeModal } from "../features/cart/clearCartModalSlice";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const ClearCartModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return(
        <div className="clear-cart-modal-container">
            <div className="clear-cart-modal">
                <h3>Are you sure you want to clear the Cart ?</h3>
                <div className="clear-modal-btns">
                    <button className="clear-modal-confirmBtn" onClick={() => {
                        dispatch(clearCart());
                        dispatch(closeModal());
                        setTimeout(() => {
                            navigate("../");
                        }, 1500);
                    }}>Confirm</button>
                    <button className="clear-modal-cancelBtn" onClick={() => {dispatch(closeModal())}}>cancel</button>
                </div>
            </div>
        </div>
    );

}

export default ClearCartModal;