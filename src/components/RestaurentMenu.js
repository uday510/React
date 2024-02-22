import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaturentMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurentMenu(resId);

  resInfo?.cards[2]?.card?.card?.info;

  if (!resInfo || resInfo === null) {
    return (
      <Shimmer />
    );
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}</li>)}
      </ul>
    </div>
  );
};

export default RestaturentMenu;