import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

  const [listOfRestaurents, setListOfRestaurents] = useState([]);

  const [filteredRestaurents, setFilteredRestaurents] = useState([]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4485835&lng=78.39080349999999');

    const jsonData = await data.json();

    setListOfRestaurents(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurents(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>You are not connected to internet.</h1>
  }

  return (
    listOfRestaurents.length === 0 ? <Shimmer /> :
      <div className="body">
        <div className="filter">
          <div className="search-box">
            <input type="text" value={searchText} onChange={(event) => {
              setSearchText(event.target.value);
            }} />
            <button className="search-btn" onClick={() => {
              const filteredRestaurents = listOfRestaurents.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurents(filteredRestaurents);
            }}>Search</button>
          </div>
          <button className="filter-btn" onClick={() => {
            const filteredRestaurents = listOfRestaurents.filter((restaurant) => restaurant.info.avgRating > 4)
            setFilteredRestaurents(filteredRestaurents);
          }}
          >Top Rated Restaurents</button>
        </div>
        <div className="res-container">
          {filteredRestaurents.map((restaurant) =>
          (
            <Link
              key={restaurant.info.id}
              to={`/restaurents/${restaurant.info.id}`}
            >
              <RestaurentCard data={restaurant} />
            </Link>
          )
          )}
        </div>
      </div>
  )
}

export default Body;