import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import RecipeItem from "./components/RecipeItem";

const APP_ID = process.env.REACT_APP_ID;
const APP_KEY = process.env.REACT_APP_KEY;
const url = `https://api.edamam.com/search?q=rice&app_id=${APP_ID}&app_key=${APP_KEY}`;

const App = () => {
  const [recipeArray, setrecipeArray] = useState([]);
  const [loading, setisLoading] = useState(true);
  useEffect(() => {
    reciepeData();
  }, []);
  const reciepeData = async () => {
    try {
      const fetchedData = await axios.get(url);
      const dataArray = fetchedData.data.hits;
      setisLoading(false);
      setrecipeArray(dataArray);
      console.log(dataArray);
    } catch (error) {
      console.log(error);
    }
  };
  const getRecipe = async (e) => {
    try {
      e.preventDefault();
      const food = e.target.elements.food.value;
      const foodData = await axios.get(
        `https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      setisLoading(false);
      setrecipeArray(foodData.data.hits);

      console.log(foodData.data.hits);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <Header />
      <Form getRecipe={getRecipe} />
      <RecipeItem recipeArray={recipeArray} loading={loading} />
    </div>
  );
};

export default App;
