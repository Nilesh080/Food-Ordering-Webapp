import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, show , setShowIndex }) => {
  // const [show , setShow] = useState(false);
  const handleclick = () => {
    // setShow(!show);
    setShowIndex();
  };
  return (
    //Accordian Header
    <div>
      <div className="bg-gray-100 w-6/12 mx-auto my-4 p-4 shadow-lg ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleclick}
        >
          <span className="font-bold text-pretty">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {show && (
          <span>
            <ItemList item={data.itemCards} showAdd={true} />
          </span>
        )}
      </div>
    </div>

    //Accordian body
  );
};

export default RestaurantCategory;
