import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import createDataContext from "./createDataContext";

const alertReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ALERT':
            return [...state, action.payload]
        case 'REMOVE_ALERT':
            return state.filter(alert => alert.id !== action.payload)
        default:
            return state
    }
}

const setAlert = dispatch => async (msg, bgColor) => {
    const id = uuidv4()
    dispatch({ type: 'SET_ALERT', payload: { msg, bgColor, id } })
    setTimeout(() => {
        dispatch({ type: 'REMOVE_ALERT', payload: id })
    }, 4000);
}

export const { Provider, Context } = createDataContext(alertReducer, { setAlert }, [])