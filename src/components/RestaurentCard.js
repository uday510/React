import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurentCard = (props) => {
  const { data } = props;

  const { loggedInUser } = useContext(UserContext);

  const { name, costForTwo, cuisines, avgRating, deliveryTime, cloudinaryImageId } = data.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-100 cursor-pointer transition-all duration-300 ease-in-out"
    >
      <img className="res-logo"
        src={CDN_URL + cloudinaryImageId}
       alt="logo"/>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{loggedInUser}</h4>
    </div>
  )
}

// Higher Order Component
// input - RestaurentCard -> RestaurentCard@Promoted
export const withPromotedLabel = (RestaurentCard) => {
  return (props) => {
    const { data } = props;

    const header = data?.info?.aggregatedDiscountInfoV3?.header;
    const subHeader = data?.info?.aggregatedDiscountInfoV3?.subHeader;
    return (
      <div >
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">{header + " " + subHeader}</label>
        <RestaurentCard {...props} />
      </div>
    )
  }

}

export default RestaurentCard;