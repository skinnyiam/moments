import axios from "axios"

//this url pointing to backend
//it returns all the post in the database
const url = 'http://localhost:5000/posts'

export const fetchPosts = () => axios.get(url);