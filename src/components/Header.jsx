import Button from "./ui/Button";
import logoImg from '../assets/logo.jpg'
import {useContext} from "react";
import CartContext from "../stores/CartContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => totalNumberOfItems + item.quantity, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg}/>
        <h1 id="title">Food App</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  )
}