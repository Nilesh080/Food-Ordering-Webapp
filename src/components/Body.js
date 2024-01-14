import { useEffect, useState } from "react";
import Restaurentcard ,{withStarLabel} from "./Restaurentcard";
import Shimmer from "./Shimmer";
import Search from "./Search";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () =>{
    const [resData, setResData] = useState([]);
    const [filtereddata , setfiltereddata] = useState([]);
    const [btnvalue , setbtnvalue] = useState("");
    const isOnline = useOnlineStatus();
    const RestaurantCardWithLabel = withStarLabel(Restaurentcard); 

    useEffect(()=>{
        console.log("inside useeffect");
        fetchData();
    },[]);

    const fetchData = async () =>{
        const liveData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // const liveData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2183307&lng=72.9780897&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        
        const json = await liveData.json();
        console.log(json);
        // console.log(JSON.parse(JSON.stringify(json)));
        //optional chaining 
        setResData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfiltereddata(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    console.log("body rendering");
    console.log(resData);

    if(isOnline === false){
        return(
            <h1>Looks Like you are offline!! Please connect to the internet</h1>
        )
    }

    if(resData.length === 0) return <Shimmer />;

    // const onclick = () =>{
    //     console.log(btnvalue)
    //     const newresData = resData.filter((x)=> x.info.name.toLowerCase().includes(btnvalue.toLowerCase()));
    //     setfiltereddata(newresData);
    // }
    // const onchange = (e) =>{
    //     setbtnvalue(e.target.value);
    // }
    console.log("rendering")
    return(
        
        <div>
            <div className="flex ">
                <div className="flex">
                    <input className="m-8 border  border-solid border-black px-2" type="text" value={btnvalue} onChange={(e)=>{
                        setbtnvalue(e.target.value);
                    }}/>
                    <button className="my-8 mx-3 ml-[-1.5rem] bg-gray-400 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded " onClick={()=>{
                        //want to filter resData here
                        console.log(btnvalue)
                        const newresData = resData.filter((x)=> x.info.name.toLowerCase().includes(btnvalue.toLowerCase()));
                        setfiltereddata(newresData);
                    }}>Search</button>
                </div>
                
                
                <button className="m-8  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5" onClick={()=>{
                    const filteredResData = filtereddata.filter((x)=> x.info.avgRating > 4.3);
                    setfiltereddata(filteredResData);
                }}>Filter The Restaurants</button>
            </div>

            <div className="flex flex-wrap">
                {
                    filtereddata.map((x)=> {
                        return (
                            <Link 
                                key={x.info.id}
                                to={"/restaurants/"+x.info.id}
                            >
                            {
                                x.info.avgRating >= 4.5 ? <RestaurantCardWithLabel key = {x.info.id} data = {x} /> : <Restaurentcard key = {x.info.id} data = {x}/> 
                            }
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    ) 
};

export default Body;