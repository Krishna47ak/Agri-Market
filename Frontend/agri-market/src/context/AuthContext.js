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
        case 'FETCH_USER':
            return {
                ...state,
                user: action.payload,
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
        localStorage.setItem('token', response.data)
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data })
        history('/profile')
    } catch (err) {
        const errors = err.response.data.errors
        console.log(err);
        // dispatch({ type: LOGIN_FAIL })
    }
}

const signup = dispatch => async (name, email, mobile, password, history) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    const body = JSON.stringify({ name, email, mobile, password })
    try {
        const response = await agriApi.post('/signup', body, config)
        localStorage.setItem('token', response.data)
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data })
        history('/profile')
    } catch (err) {
        const errors = err.response.data.errors
        console.log(err);
        // dispatch({ type: LOGIN_FAIL })
    }
}

const fetchUser = dispatch => async () => {
    const config = {
        headers: {
            "ngrok-skip-browser-warning": "69420" //this also resolved cors error 
        }
    }

    try {
        const response = await agriApi.get('/', config)
        dispatch({ type: 'FETCH_USER', payload: response.data })
    } catch (err) {
        const errors = err.response.data.errors
        console.log(err);
        // dispatch({ type: LOGIN_FAIL })
    }
}


export const { Provider, Context } = createDataContext(authReducer, { login, signup, loadUser, fetchUser }, { token: localStorage.getItem('token'), isAuthenticated: null, loading: true, user: null })