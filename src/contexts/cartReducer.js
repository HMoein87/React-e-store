
export const CartReducer = (state, action) => {
    debugger;

    switch(action.type) {
        case "ADD":
            //find the index of the item in the shopping cart
            const index = state.cartItems.findIndex(x => x.id === action.payload.id);

            if (index === -1) {
                state.cartItems.push({...action.payload, quantity: 1});
            }
            else {
                state.cartItems[index].quantity++;
            }

            return state;

        case "REMOVE":
            return state;
        default:
            return state;
    }
} 