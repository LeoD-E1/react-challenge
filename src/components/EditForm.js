import React, { useContext, useState } from "react";
import { Fragment } from "react";
import { Form, Button } from "react-bootstrap";
import { PostContext } from "../context/PostContext";

const EditForm = () => {
  let { editPost } = useContext(PostContext);

  const [id] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      id,
      title,
      body,
    };
    console.log(post);
  };

  const handleEdit = () => {
    editPost = null;
  };

  return (
    <Fragment>
      {editPost == null ? (
        <p>No item to Edit</p>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              className="mb-2"
              type="text"
              placeholder="ID of the item"
              defaultValue={editPost.id}
              disabled
            />
            <Form.Control
              className="mb-2"
              type="text"
              placeholder="Insert new title"
              defaultValue={editPost.title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <Form.Control
              type="text"
              placeholder="Insert new body"
              defaultValue={editPost.body}
              onChange={(e) => {
                setBody(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="warning" type="submit" onClick={handleEdit}>
            Apply
          </Button>
        </Form>
      )}
    </Fragment>
  );
};
export default EditForm;
