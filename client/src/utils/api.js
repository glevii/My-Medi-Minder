import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    // User related API calls
    create: function(userData) {
        return axios.post('/api/user/signup', userData)
    },
    login: (userData)=> {
        return axios.post('/api/user/login', userData)
    },
    currentUser: () => {
      return axios.get('/api/user/current')
    },
    logout: () => {
      return axios.get('/api/user/logout')
    },
    createMed: (medData) => {
      return axios.post('/api/med', medData)
    },
    findAllMeds: () => {
      return axios.get('/api/med')
    },
    findMedByID: (id) => {
      return axios.get('/api/med/' + id)
    }
} 