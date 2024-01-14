import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useCustomRestaurantMenu = (resId) =>{
    const [resData , setResData] = useState(null);

    useEffect(()=>{
        fetchData();
    })

    const fetchData = async()=>{
        const Data = await fetch(MENU_URL+resId);
        const json = await Data.json();
        setResData(json.data);
    }

    return resData;
};

export default useCustomRestaurantMenu;
