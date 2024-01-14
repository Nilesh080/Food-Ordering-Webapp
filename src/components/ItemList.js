
import { CDN_URL } from "../../utils/constants";
import { addItem } from "../../utils/cartSlice"
import { useDispatch } from "react-redux";

const ItemList = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  // console.log("here");
  return (
    <div>
      {item.map((x) => (
        <div
          key={x.card?.info?.id}
          className="py-2 my-2 border-gray-300 border-b-2 text-left"
        >
          <div className="flex justify-between">
            <div className="w-9/12">
              <span>{x.card?.info?.name}</span>
              <span>
                - ₹
                {x.card?.info?.price
                  ? x.card?.info?.price / 100
                  : x.card?.info?.defaultPrice / 100}
              </span>
              <p className="text-xs py-2">{x.card?.info?.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  className="bg-black text-white p-2 rounded-lg mx-10"
                  onClick={() => handleAddItem(x)}
                >
                  Add +
                </button>
              </div>
              <img
                className="w-full rounded"
                src={CDN_URL + x.card?.info?.imageId}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
