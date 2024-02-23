import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { data } = props;

  const { name, costForTwo, cuisines, avgRating, deliveryTime, cloudinaryImageId } = data.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-100 cursor-pointer transition-all duration-300 ease-in-out"
    >
      <img className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  )
}

// Higher Order Component
// input - RestaurentCard -> RestaurentCard@Promoted


export const withPromotedLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div >
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurentCard {...props} />
      </div>
    )
  }

}

export default RestaurentCard;