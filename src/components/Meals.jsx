import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

export default function Meals() {
  const { data: mealsFetched, isLoading, error } = useHttp('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) {
    return (<p className="center">Fetching Meals ...</p>);
  }

  if (error) {
    return (
      <Error title="Failed to fetch meals" message={error}/>
    );
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