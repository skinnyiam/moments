import express from "express";
const router = express.Router();
import { getPost, createPost } from "../controllers/posts.js";

//localhost:5000/ but when is exported in index we add prifx there /posts so this works on
//localhost:5000/posts/
router.get('/', getPost)
router.post('/', createPost)

export default router