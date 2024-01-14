import { CDN_URL } from "../../utils/constants";


const Restaurentcard = (props) =>{
    // const {name,cloudinaryImageId,costForTwo,cuisines,avgRating} = props.info;
    const {data}  = props;
    const {info} = data;
    const {name,cloudinaryImageId,costForTwo,cuisines,avgRating} = info;
    const {deliveryTime} = info.sla;
    return (
        <div className="p-4 m-2 bg-gray-100 w-[200] max-w-md rounded shadow-lg ">
            <img className="w-full h-48 object-cover" src={CDN_URL+cloudinaryImageId} alt="card-logo"/>
            <h2 className="font-bold text-l mb-2">{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating + " star"}</h4>
            <h4>{deliveryTime +" mins"}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
};

export const withStarLabel = (Restaurentcard) =>{
    return (props)=>{
        return (
            <div>
                <label className="absolute  bg-red-500 text-white px-2 py-1 rounded-tl-md rounded-br-md">BestSeller</label>
                <Restaurentcard {...props} />
            </div>
        )
    }
}

export default Restaurentcard;