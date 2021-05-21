import React, { useReducer } from 'react';
import PostReducer from './PostReducer';
import PostContext from './PostContex';


const PostState = (props) => {

  const initialState = {
    posts: [],
    detailPost: null
  }

  const [state, dispatch] = useReducer(PostReducer, initialState)

  const getPosts = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const jsons = await data.json()
    console.log(jsons)
  }

  const getPostById = async (id) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const jsons = await data.json()
    console.log(jsons)
  }

  const createPost = async (item) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: item.title,
        body: item.body,
        userId: item.userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const jsons = await response.json();
    console.log(jsons);
  }

  const updatePostById = async (id, item) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        title: item.title,
        body: item.body
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const jsons = await response.json()
    console.log(jsons)
  }

  const deletePostById = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
      });
      console.log(response)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <PostContext.Provider value={{
      posts: state.posts,
      detailPost: state.detailPost,
      getPosts,
      getPostById,
      updatePostById,
      deletePostById,
      createPost
    }}>
      {props.children}
    </PostContext.Provider>
  )
}

export default PostState;