import axios from "axios";

export default {
  getUser: function(email) {
    return axios.get(`/api/users/${email}`)
  },
  createUser: function(userData){
    return axios.post(`api/users/`, userData)
  },
  updateUser: function(userData){
    return axios.put(`api/users/`, userData)
  }
}