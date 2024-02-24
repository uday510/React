import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";

const RestaturentMenu = () => {
  const { resId } = useParams();

  const dummy = "dummy data";

  const resInfo = useRestaurentMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo || resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (card) => card?.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/** categories accordions */}
      {categories.map((category, index) => (
        <RestaurentCategory
          key={category?.card?.card.title}
          data={{ ...category?.card?.card, index }} // Pass the index to the RestaurentCategory component
          showItems={index === showIndex && true}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaturentMenu;
