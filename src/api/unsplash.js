import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com' ,
    headers: {
        Authorization: 'Client-ID GIp8dqWGCMDPy2ZBM9Wk9X6UhN66WwPmoF8FiPLbw7Y'
    } 
});