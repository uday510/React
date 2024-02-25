import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length > 0 &&
          <button className="bg-black text-white p-2 m-2 rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>}
        {cartItems.length === 0 && <p>Your cart is empty</p>}
        <ItemList items={cartItems} />
      </div>
    </div>
  )
};

export default Cart;