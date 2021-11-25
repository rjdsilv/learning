import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a-yU2MhqeUNMalnpGC88Pzm6bFudnVrD5DOfkNRf2VM',
    }
});
