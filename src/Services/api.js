import axios from 'axios'
import { config } from '../config.js'

async function getDate() {
    const response = await axios.get(`${config.PATH_BASE}/Date`)
    return response.data;
}

async function getGalleries() {
    const response = await axios.get(`${config.PATH_BASE}/Gallery/List`)
    return response.data;
}

async function getImageUrls(galleryName) {
    const response = await axios.get(`${config.PATH_BASE}/Gallery/Get?Name=` + galleryName)
    return response.data;

}

const services = {
    getDate,
    getGalleries,
    getImageUrls
}

export default services;