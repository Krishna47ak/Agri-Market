import axios from 'axios'
import createDataContext from "./createDataContext";

const productReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_products':
            return { ...state, products: action.payload }
        default:
            return state
    }
}

const fetchProducts = dispatch => async () => {
    try {
        const response = await axios.get("https://run.mocky.io/v3/954c1249-ac3e-4366-8bfa-7a2ebad49843")
        dispatch({ type: 'fetch_products', payload: response.data })
    } catch(err) {
        console.log('somethng went wrong')
    }
}

export const { Provider, Context } = createDataContext(productReducer, { fetchProducts }, { products:[] })