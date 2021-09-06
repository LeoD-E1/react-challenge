import React, { Fragment, useEffect, useContext } from "react";
import { Spinner } from "react-bootstrap";
import Cards from "./Cards";
import "../styles/TableData.css";
import { PostContext } from "../context/PostContext";

const TableData = () => {
  const { posts, getPosts } = useContext(PostContext);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default TableData;
