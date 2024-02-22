import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { data } = props;

  const { name, costForTwo, cuisines, avgRating, deliveryTime, cloudinaryImageId } = data.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  )
}


export default RestaurentCard;