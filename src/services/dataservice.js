import Axios from 'axios';
Axios.defaults.baseURL = 'https://caroftheyear2023.jedlik.cloud';

export default {
    async getAllGyartok(){ 
        const resp = await Axios.get('/api/manufacturers')
        return resp.data
    },

    async getCarById(manufacturerid){ 
        const resp = await Axios.get(`/api/cars/${manufacturerid}`)
        return resp.data
    },

    async saveVote(vote){
        const resp = await Axios.post('/api/vote', vote)
        return resp.data
    },

    // updateUser(user,id){
    //     return Axios.put(`/users/${id}`,user).then(()=>{});
    // }


}