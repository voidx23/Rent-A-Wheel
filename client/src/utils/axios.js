import axios from 'axios'


const URL = "http://localhost:8800/api/";

const userInstance = axios.create({
    baseURL:`${URL}user`,
})


export {userInstance }