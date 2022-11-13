import PostDetail from "../models/postMoments.js"


//to get post from the database 
export const getPost = async(req, res) => {
    try {
        const postDetails = await PostDetail.find()
        res.status(200).json(postDetails)
    } catch (error) {
        res.status(404).json(error)
    }
}


//to create post 
export const createPost = async(req, res) => {
    //this value recieving from the frontend
    const post = req.body;
    //passing the value in database
    const newPost = new PostDetail(post)

    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json(error)
    }
}