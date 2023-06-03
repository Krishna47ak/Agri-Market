import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://a196-2402-3a80-1a91-6a98-70dd-fa2a-4046-59ab.ngrok-free.app'
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