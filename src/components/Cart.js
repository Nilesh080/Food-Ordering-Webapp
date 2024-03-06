import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleClick = () => {
    dispatch(clearItem());
  };
  return (
    <div className="text-center p-4 m-4">
      <h1 className="text-xl font-bold">Cart</h1>
      {cartItems.length === 0 ?
      <h1 className="p-10">
        Please go to restaurant menu page and add some item to the cart
      </h1> :
      <button
        className="bg-black text-white rounded-lg p-2 "
        onClick={() => handleClick()}
      >
        Clear Cart
      </button>}
      <div className="w-6/12 m-auto">
        <ItemList item={cartItems} showAdd = {false} />
      </div>
    </div>
  );
};

export default Cart;
