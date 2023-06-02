import axios from "axios";
import createDataContext from "./createDataContext";
import agriApi from "../api/agriApi"

const authReducer = (state, action) => {
    switch (action.type) {
        case 'USER_LOADED':
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true,
                loading: false
            }
        case 'LOGIN_SUCCESS':
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }
        default:
            return state
    }
}

const loadUser = dispatch => async () => {
    try {
        const token = localStorage.getItem('token')
        if (token) {
            dispatch({ type: 'USER_LOADED', payload: token })
        }
    } catch (err) {
        // dispatch({ type: AUTH_ERROR })
        console.log(err.response.data.errors);
    }
}

const login = dispatch => async (email, password, history) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password })
    try {
        const response = await agriApi.post('/signin', body, config)
        // console.log(response.data);
        localStorage.setItem('token', response.data)
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data })
        history('/profile')
        // dispatch(loadUser())
    } catch (err) {
        const errors = err.response.data.errors
        console.log(err);
        // if (errors) {
        //     errors.forEach(error => {
        //         dispatch(setAlert(error.msg, 'danger'))
        //     });
        // }
        // dispatch({ type: LOGIN_FAIL })
    }
}


export const { Provider, Context } = createDataContext(authReducer, { login, loadUser }, { token: localStorage.getItem('token'), isAuthenticated: null, loading: true, user: null })