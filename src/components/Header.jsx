import Button from "./ui/Button";
import logoImg from '../assets/logo.jpg'
import {useContext} from "react";
import CartContext from "../stores/CartContext";
import UserProgressContext from "../stores/UserProgressContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext)
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => totalNumberOfItems + item.quantity, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg}/>
        <h1 id="title">Food App</h1>
      </div>
      <nav>
        <Button
          textOnly
          onClick={handleShowCart}
        >Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  )
}