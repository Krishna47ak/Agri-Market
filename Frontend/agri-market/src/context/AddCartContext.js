import createDataContext from "./createDataContext";

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'add_items':
            return { ...state, cart: [...state.cart, action.payload] }
        case 'delete_items':
            return {cart:state.cart.filter( (item) => item.id !== action.payload )}
        default:
            return state
    }
}

const addItems = dispatch => (name, img, price, id, qty) => {
        dispatch({ type: 'add_items', payload: { name, img, price, id, qty } })

}
const deleteItems = dispatch => (id) => {
        dispatch({ type: 'delete_items', payload: id })
}

export const { Provider, Context } = createDataContext(cartReducer, { addItems, deleteItems }, { cart: [] })