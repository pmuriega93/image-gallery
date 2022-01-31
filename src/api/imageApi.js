import axios from 'axios'

const imageApi = axios.create({
    baseURL: 'https://api.pexels.com/v1/search',
                    headers: {
                        Authorization: process.env.VUE_APP_API_KEY
                    }

})


export default imageApi