import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  let s = "Login";
  const [data, setData] = useState(s);
  const isOnline = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div>
        <img className="w-[150px]" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-2 mx-4">
            Online Status : {isOnline ? "🟢" : "🔴"}
          </li>
          <li className="px-2 mx-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 mx-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 mx-2">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-2 mx-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2 mx-2 font-bold">
            <Link to="/cart">cart - ({cartItems.length} {cartItems.length > 1 ? "items" : "item"})</Link>
            
          </li>
          <button
            className="px-2 mx-2"
            onClick={() => {
              const newData = data === "Login" ? "Logout" : "Login";
              setData(newData);
              // console.log(data);
            }}
          >
            {data}
          </button>
          <li className="px-2 mx-2 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
