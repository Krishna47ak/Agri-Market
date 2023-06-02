import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://2120-2409-4071-2095-1cf7-ed4b-4fc9-bb1c-85d4.ngrok-free.app'
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