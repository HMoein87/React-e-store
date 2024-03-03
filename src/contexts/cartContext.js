import React, { createContext, useReducer } from "react";

import { CartReducer } from "./cartReducer";


//create cart context
export const CartContext = createContext();

//get shopping cart items from local storage
const Storage =  localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

//initialize cart state
const initialState = { cartItems: Storage };

//return provider of CartContext as a jsx
const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(CartReducer, initialState);

    //add product to cart
    const addProduct = (payload) => {
        dispatch({ type: 'ADD', payload});
        return state.cartItems;      
    }

    //remove product from cart
    const removeProduct = (payload) => {
        dispatch({ type: 'REMOVE', payload});
        return state.cartItems;      
    }

    //increase product quantity exists in cart
    const increaseQuantity = (payload) => {
        dispatch({ type: 'INCQTY', payload});
        return state.cartItems;
    }

    //decrease product quantity exists in cart
    const decreaseQuantity = (payload) => {
        dispatch({ type: 'DECQTY', payload});
        return state.cartItems;
    }

    //clear cart
    const clearCart = () => {
        dispatch({ type: 'CLEAR', payload: undefined});
        return state.cartItems;
    }

    //retrieve items in the cart
    const getCartItems = () => {
        return state.cartItems;
    }

    //methods passed to the cart context provider component
    const contextValues = {
        addProduct,
        removeProduct,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        getCartItems,
        ...state
    }

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;