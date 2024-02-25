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

    //remove product from cart
    const removeProduct = (payload) => {
        dispatch({ type: 'REMOVE', payload});        
    }

    //increase product quantity exists in cart
    const increaseQuantity = (payload) => {
        dispatch({ type: 'INCQTY', payload});
    }

    //decrease product quantity exists in cart
    const decreaseQuantity = (payload) => {
        dispatch({ type: 'DECQTY', payload});
    }

    //clear cart
    const clearCart = () => {
        dispatch({ type: 'CLEAR', payload: undefined});
    }

    //retrieve items
    const getItems = () => {
        return state.cartItems;
    }

    //methods passed to the cart context provider component
    const contextValues = {
        addProduct,
        removeProduct,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        getItems,
        ...state
    }

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;