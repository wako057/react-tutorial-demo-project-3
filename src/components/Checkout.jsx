import Modal from "./ui/Modal";
import {useContext} from "react";
import CartContext from "../stores/CartContext";
import {currencyFormatter} from "../utils/formatting";
import Input from "./ui/Input";
import Button from "./ui/Button";
import UserProgressContext from "../stores/UserProgressContext";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0);

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  return (
    <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Fullname" type="text" id="full-name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className={"modal-actions"}>
          <Button type={"button"} textOnly onClick={handleClose}>Close</Button>
          <Button textOnly>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
