import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";

const requestConfig = {};

export default function Meals() {
  const { data: mealsFetched, isLoading, error } = useHttp('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) {
    return (<p>Fetching Meals ...</p>);
  }

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