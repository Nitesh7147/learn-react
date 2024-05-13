import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
/**
here why use two dots ? - ../constants - 
it means you are importing from a file named constants that is located one level above the current directory.
. represents the current directory.
.. represents the parent directory.
*/
function filterData(searchText, restaurants){
  const data =  restaurants.filter((restaurant)=>
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
  return data;
}

const Body = () => {
  // const searchInput = "KFC"
  // local variables like this are not preferred in react, whenever you have to change any variable inside react, we need to maintain a
  // variable that changes itself then we have to use a react variable
  // react variable is kind of a state variable.
  // Every component in react maintains a state, so we can put variables on to the state and every time you have to create some local
  // variables you use state in it
  // to keep our UI in sync with the state for that syncing we use state variable.
  const [searchText, setSearchText] = useState(""); // searchText is a local state variable
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);


  
  // empty dependency array -> it will be called once after render
  // dependency array [searchText] -> it will call once after inital render + everytime after re-render after when searchText changes
  useEffect(() =>{
      // api call in empty dependency array so the api will call only once after the render
      getRestaurant();
  },[]);
  
  async function getRestaurant(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING") 
    const json = await data.json();
    console.log(json);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  // conditional rendering - using ternary operator
  // if restaurant is empty -> show shimmer UI
  // if restaurant has data -> show actual data on UI

  // not render component (early return)
  if(!allRestaurants) return null;
  if(filteredRestaurants?.length === 0) return <h2>No restaurant match  your filter!</h2>

  return (allRestaurants.length === 0) ? (<Shimmer />) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          // whenever input is changed this function will be called
          onChange={(e) => {
            // e.target.value -> whatever you write in input
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter the data
            // update the state - restaurants
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
        Search
        </button>
      </div>
      <div className="restaurant-list">
        {/* <RestaurantCard restaurant = {restaurantList[0]} /> */}
        {/* <RestaurantCard {...restaurantList[0].data}/> */}
        {console.log(filteredRestaurants)}
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};


export default Body;
