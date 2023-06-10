import axios from "axios";
import createDataContext from "./createDataContext";
import agriApi from "../api/agriApi"

const authReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return {
                ...state,
                token: localStorage.getItem('token'),
                user: action.payload,
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
        case 'AUTH_ERROR':
            // localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        default:
            return state
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
        dispatch({ type: 'AUTH_ERROR' })
        const errors = err.response.data.error
        console.log(errors);
        // const errors = err.response.data.errors
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
        const errors = err.response.data.error
        console.log(errors);
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

const editProfile = dispatch => async (name, email, mobile, pincode, address, history) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, mobile, pincode, address })
    try {
        const response = await agriApi.put('/profile-edit', body, config)
        dispatch({ type: 'FETCH_USER', payload: response.data })
        history('/profile')
    } catch (err) {
        const errors = err.response.data.errors
        console.log(err);
        // dispatch({ type: LOGIN_FAIL })
    }
}



export const { Provider, Context } = createDataContext(authReducer, { login, signup, fetchUser, editProfile }, { token: localStorage.getItem('token'), isAuthenticated: null, loading: true, user: null })