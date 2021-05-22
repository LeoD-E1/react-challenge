import React, { useState } from 'react';
import { PostContext } from './PostContext';

const PostState = (props) => {

  const initialState = {
    posts: [],
    detailPost: null,
    editPost: null,
    switchForm: false
  }

  const [state, setState] = useState(initialState)

  const getPosts = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const jsons = await data.json()
    setState({
      ...state,
      posts: jsons
    })
  }

  const getPostById = async (id) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const json = await data.json()
    setState({
      ...state,
      detailPost: json
    })
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
    //setState(jsons)
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
      // setState(state.posts.filter((user) => user.id !== id))
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <PostContext.Provider value={{
      posts: state.posts,
      detailPost: state.detailPost,
      switchForm: state.switchForm,
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