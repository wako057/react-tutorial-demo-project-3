import Modal from "./ui/Modal";
import {useContext} from "react";
import CartContext from "../stores/CartContext";
import Button from "./ui/Button";
import UserProgressContext from "../stores/UserProgressContext";
import {currencyFormatter} from "../utils/formatting";

export default function Cart() {
  const cartCtx = useContext(CartContext)
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0);

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => {
          return (
            <li key={item.id}>
              {item.name} - {item.quantity}
            </li>
          );
        })}
      </ul>
      <p className="cart-total">
        {currencyFormatter.format(cartTotal)}
      </p>
      <p className="modal-actions">
        <Button onClick={handleCloseCart} textOnly>Close</Button>
        <Button onClick={handleCloseCart}>Go to Checkout</Button>
      </p>
    </Modal>
  );
}