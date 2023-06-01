import createDataContext from "./createDataContext";

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'add_items':
            if (state.cart.find((item) => item.id == action.payload.id)) {
                return state
            }
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
        case 'delete_items':
            return { cart: state.cart.filter((item) => item.id !== action.payload) }
        case 'add_quantity':
            return { cart: state.cart.filter((item) => item.id == action.payload.id ? item.qty = item.qty + 1 : item.qty) }
        case 'remove_quantity':
            return { cart: state.cart.filter((item) => item.id == action.payload.id ? item.qty = item.qty - 1 : item.qty) }
        default:
            return state
    }
}

const addItems = dispatch => (name, img, price, id) => {
    dispatch({ type: 'add_items', payload: { name, img, price, id } })
}

const addQuantity = dispatch => (id) => {
    dispatch({ type: 'add_quantity', payload: { id } })
}

const removeQuantity = dispatch => (id) => {
    dispatch({ type: 'remove_quantity', payload: { id } })
}

const deleteItems = dispatch => (id) => {
    dispatch({ type: 'delete_items', payload: id })
}

export const { Provider, Context } = createDataContext(cartReducer, { addItems, deleteItems, addQuantity, removeQuantity }, { cart: [] })