import * as api from "../api/index"

//action creators are functions that return an action
//since we have dealing with async logic we will add async and 
//thunk will return an function or we can say dispatch an action according 
// to logic

export const getPost = ()=> async(dispatch)=>{
    try{
        const {data}= await api.fetchPosts();
        dispatch({type:'FETCH_ALL',payload:data})
    }catch(error){
       console.log(error)
    }
}

export const createPost = (post)=> async(dispatch)=>{
  try{
    const {data} = await api.createPost(post)

    dispatch({type:"CREATE",payload:data})
  }catch(err){
    console.log(err)
  }
}