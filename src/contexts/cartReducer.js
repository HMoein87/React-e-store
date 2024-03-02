
export const CartReducer = (state, action) => {
    let index = -1;

    if (action.payload)
        //find the index of the item in the shopping cart
        index = state.cartItems.findIndex(x => x.id === action.payload.id);

    let newItems = [...state.cartItems];

    switch(action.type) {
        //add item and increase quantity of an item
        case "ADD":
        case "INCQTY":
            if (index === -1) {
                newItems.push({ ...action.payload, quantity: 1 });
            }
            else {
                newItems[index].quantity++;
            }

            break;

        //remove an item from cart
        case "REMOVE":
            if (index > -1)
                newItems = state.cartItems.filter(x => x.id !== action.payload.id);
            break;
        //decrease quantity of an item
        case "DECQTY":
            if (index > -1)
                if (newItems[index].quantity > 1)
                    newItems[index].quantity--;
            break;
        //clear cart
        case "CLEAR":
            newItems = [];
            break;
        
        default:
    }

    state.cartItems = newItems;

    return state;
} 