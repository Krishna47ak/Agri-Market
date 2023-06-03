import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://3b0e-2402-3a80-1a93-ee0c-e847-5cd0-6d69-7526.ngrok-free.app'
})

instance.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default instance;