import Modal from "./ui/Modal";
import {useContext} from "react";
import CartContext from "../stores/CartContext";
import Button from "./ui/Button";
import UserProgressContext from "../stores/UserProgressContext";
import {currencyFormatter} from "../utils/formatting";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext)
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0);

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === 'cart'}
      onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              onDecrease={() => cartCtx.removeItem(item.id)}
              onIncrease={() => cartCtx.addItem(item)}
            />
          );
        })}
      </ul>
      <p className="cart-total">
        {currencyFormatter.format(cartTotal)}
      </p>
      <p className="modal-actions">
        <Button onClick={handleCloseCart} textOnly>Close</Button>
        { cartCtx.items.length > 0 && (<Button onClick={handleGoToCheckout}>Go to Checkout</Button>)}

      </p>
    </Modal>
  );
}