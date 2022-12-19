import axios from 'axios'
import { config } from '../config.js'

async function getDate() {
    const response = await axios.get(`${config.PATH_BASE}/Date`)
    return response.data;
}

async function getGalleries(){
    const response = await axios.get(`${config.PATH_BASE}/Date`)
    return response.data;
}

const services={
    getDate,
    getGalleries
} 

export default services;