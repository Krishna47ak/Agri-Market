import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://a78a-2402-8100-25d8-94fd-ccd3-24f8-7fae-3cfd.ngrok-free.app'
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