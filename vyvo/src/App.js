import DisplayUsers from "./components/DisplayUsers";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";

function App() {
  // states for the current array of users and the current text in the search bar
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");

  // effect to run once at the beginning of the app component load, to pull in all of the users in the db, assign that array to the users state variable
  useEffect(() => {
    axios.get("http://localhost:5005/api/users/all").then((results) => {
      setUsers(results.data);
    });
  }, []);

  return (
    <div className="App">
      <SearchBar searchText={searchText} setSearchText={setSearchText}></SearchBar>
      <DisplayUsers users={users} currentSearchText={searchText}></DisplayUsers>
    </div>
  );
}

export default App;
