import React, { createContext, useReducer } from "react";

import { CartReducer } from "./cartReducer";


//create cart context
export const CartContext = createContext();

//initialize cart state
const initialState = { cartItems: [] };

//return provider of CartContext as a jsx
const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(CartReducer, initialState);

    //add product to cart
    const addProduct = (payload) => {
        dispatch({ type: 'ADD', payload});        
    }

    //json object passed to the component
    const contextValues = {
        addProduct,
        ...state
    }

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;