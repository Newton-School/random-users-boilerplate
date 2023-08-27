import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "./users";
const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    // Fetch data from the API
    axios.get("https://randomuser.me/api/?results=10")
      .then(response => {
        // Extract first names from the API response
        const firstNames = response.data.results.map(user => user.name.first);
        setItems(firstNames);
        // Simulate a 3-second delay before setting loading to false
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); // Empty dependency array, so this effect runs only once on mount
  return <Users isLoading={isLoading} items={items} />;
};
export default App;
