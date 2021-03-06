import axios from "axios";

export default {
  getUser: function(email) {
    return axios.get(`/api/users/${email}`)
  },
  createUser: function(userData){
    return axios.post(`api/users/`, userData)
  },










  //Gets a test case
  getTestData: function(){
    return axios.get("/api/testdata")
  },
  //Get all animals
  getBiodiversity: function(){
    return axios.get("/api/biodiversity")
  },

  // Gets all books
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the book with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
