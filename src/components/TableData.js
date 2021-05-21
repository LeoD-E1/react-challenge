import React, { Fragment, useEffect, useContext } from "react";
import { Spinner } from 'react-bootstrap';
import Cards from './Cards'
import '../styles/TableData.css';
import { PostContext } from '../context/PostContex'

const TableData = () => {

  const { posts, getPosts } = useContext(PostContext)

  /* const getData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json()
    setBlogs(posts)
  } */

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <Fragment>
      <div className="row" id="principal">
        <div className="col-md-12">
          {posts.length > 0 ? ( // if have not any data for present, then show a spinner of 'loading...'
            <Cards posts={posts} />
          ) : (
            <div>
              <Spinner animation="border" role="status" variant="primary">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          )
          }
        </div>
      </div>
    </Fragment >
  );
};

export default TableData;
