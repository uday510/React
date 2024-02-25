import { useEffect, useState, useContext } from "react";
import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { HOME_API } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {

  const [listOfRestaurents, setListOfRestaurents] = useState([]);

  const [filteredRestaurents, setFilteredRestaurents] = useState([]);

  const [searchText, setSearchText] = useState('');

  const RestaurentCardWithPromotedLabel = withPromotedLabel(RestaurentCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(HOME_API);

    const jsonData = await data.json();

    setListOfRestaurents(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurents(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>You are not connected to internet.</h1>
  }

  const { setUserName, loggedInUser } = useContext(UserContext);

  // console.log(" Restaurent lists: ", listOfRestaurents);
  return (
    listOfRestaurents.length === 0 ? <Shimmer /> :
      <div className="body">
        <div className="flex">
          <div className="search m-4 p-4">
            <input type="text" className="border border-black"
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
            />
            <button
              className="px-4 py-2 bg-green-200 m-4 rounded-lg"
              onClick={() => {
                const filteredRestaurents = listOfRestaurents.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredRestaurents(filteredRestaurents);
              }}>Search
            </button>
          </div>
          <div className="search m-4 p-4 flex items-center">
            <button className="px-4 py-2 bg-blue-100 rounded-lg"
              onClick={() => {
                const filteredRestaurents = listOfRestaurents.filter((restaurant) => restaurant.info.avgRating > 4)
                setFilteredRestaurents(filteredRestaurents);
              }}
            >Top Rated Restaurents
            </button>
            <div className="search m-4 p-4 flex items-center">
              <label>UserName : </label>
              <input
                className="border border-black p-2"
                value={loggedInUser}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap ">
          {filteredRestaurents.map((restaurant) =>
          (
            <Link
              key={restaurant.info.id}
              to={`/restaurents/${restaurant.info.id}`}
            >
              {/* {
                restaurant.info.isPromoted ?
                  <RestaurentCardWithPromotedLabel data={restaurant} /> :
                  <RestaurentCard data={restaurant} />
              } */}
              <RestaurentCardWithPromotedLabel data={restaurant} />
            </Link>
          )
          )}
        </div>
      </div>
  )
}

export default Body;