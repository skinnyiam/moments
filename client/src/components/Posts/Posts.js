import React from 'react'
import Post from "./Post/Post"
import {useSelector} from "react-redux"
const Posts = ({setCurrentId}) => {
    const posts = useSelector((state)=> state.posts)
    console.log(posts)
  return (
    <div>
        <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
             {
              posts.map((post)=>{
                return(
                  <Post 
                  setCurrentId={setCurrentId}
                 key={post._id} 
                 post={post}
                  />
                )
              })
             }
        </div>
       

     
    </div>
  )
}

export default Posts