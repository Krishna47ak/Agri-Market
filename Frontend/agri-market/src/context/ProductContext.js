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
        const response = await axios.get("https://run.mocky.io/v3/18189840-7783-4ef6-b2ba-0c86565738c3")
        dispatch({ type: 'fetch_products', payload: response.data })
    } catch(err) {
        console.log('somethng went wrong')
    }
}

export const { Provider, Context } = createDataContext(productReducer, { fetchProducts }, { products:[] })