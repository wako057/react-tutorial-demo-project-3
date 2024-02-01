import {getMeals} from "../https";
import {useEffect, useState} from "react";
import MealItem from "./MailItem";

export default function Meals() {
  const [ mealsFetched, setMealsFetched ] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const meals = await getMeals();
      console.log(meals);
      setMealsFetched(meals);
    }
    fetchMeals();
  }, []);


  return (
    <ul id="meals">
      {mealsFetched.map((mealData) => (
        <li key={mealData.id}>
          <MealItem meal={mealData}></MealItem>
        </li>
      ))}
    </ul>
  )
}