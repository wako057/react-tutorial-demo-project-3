import Header from "./components/Header";
import Meals from "./components/Meals";
import {CartContextProvider} from "./stores/CartContext";
import {UserProgressContextProvider} from "./stores/UserProgressContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header/>
        <Meals/>
        <Cart/>
        <Checkout/>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
