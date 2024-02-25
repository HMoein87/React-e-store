
export const CartReducer = (state, action) => {
    debugger;
    let index = -1;

    if (action.payload)
        //find the index of the item in the shopping cart
        index = state.cartItems.findIndex(x => x.id === action.payload.id);

    switch(action.type) {
        //add item and increase quantity of an item
        case "ADD":
        case "INCQTY":
            if (index === -1) {
                state.cartItems.push({...action.payload, quantity: 1});
            }
            else {
                state.cartItems[index].quantity++;
            }

            break;

        //remove an item from cart
        case "REMOVE":
            if (index > -1)
                state.cartItems.splice(index, 1);
            break;
        //decrease quantity of an item
        case "DECQTY":
            if (index > -1)
                state.cartItems[index].quantity--;
            break;
        //clear cart
        case "CLEAR":
            state.cartItems = [];
            break;
        default:
    }
    return state;
} 