import {currencyFormatter} from "../utils/formatting";
import Button from "./ui/Button";
import {useContext} from "react";
import CartContext from "../stores/CartContext";

export default function MealItem({meal}) {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    console.log(meal);
    cartCtx.addItem(meal);
  }
  return (
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}/>
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>

      </article>
    </div>
  );
}