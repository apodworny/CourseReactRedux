import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID AlJBdWmGnQKLyt50umYozXz0_Gqc3U0TPycyZZiGnus'
    }
});