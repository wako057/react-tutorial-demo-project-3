import {createContext, useReducer} from "react";

const cartContext = createContext({
  items: [],
  addItem: (item) => {},
  deleteItem: (id) => {},
});

function cartReducer(state, action) {
  if (action === 'ADD_ITEM') {
    const existingCartIndexArray = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];
    if (existingCartIndexArray > -1) {
      const existingItem = state.items[existingCartIndexArray];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem[existingCartIndexArray].quantity + 1
      };
      updatedItems[existingCartIndexArray] = updatedItem;
    } else {
      updatedItems.push({
        ...action.item,
        quantity: 1
      });
    }

    return {
      ...state,
      items: updatedItems
    };
  }

  if (action === 'REMOVE_ITEM') {
    // remove an item from the state
  }

  return state;
}

export function CartContextProvider({children}) {
  useReducer(cartReducer, { items: [] });
  return <CartContext.Provider>{children}</CartContext.Provider>
}

export default cartContext;