import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantsMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(MENU_URL + resId);
    const data = await fetch("https://corsproxy.org/?"+encodeURIComponent(MENU_URL + resId));
    const json = await data.json();
    console.log(json);
    // console.log("i m here");
    setResMenu(json.data);
  };

  if (resMenu === null) return <Shimmer />;

  const { name, city, id, cuisines, costForTwoMessage } =
    resMenu?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (x) =>
        x.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((x, index) => (
        <RestaurantCategory
          key={x?.card?.card?.title}
          data={x?.card?.card}
          show={index === showIndex ? true : false}
          setShowIndex={() => {
            showIndex === index ? setShowIndex(null) : setShowIndex(index);
            
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantsMenu;
