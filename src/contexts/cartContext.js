import React, { createContext } from "react";


//create cart context
export const CartContext = createContext();

//initialize cart state
const initialState = { cartItems: []};

//return provider of CartContext as a jsx
const CartContextProvider = ({children}) => {
    return (
        <CartContext.Provider value={initialState}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;