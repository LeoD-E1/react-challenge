import React, { useContext } from 'react';
import { Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import { PostContext } from '../context/PostContext'

const EditForm = () => {

  let { editPost } = useContext(PostContext)

  const handleEdit = () => {
    editPost = null
  }

  return (
    <Fragment>
      {
        editPost == null ? (
          <p>No item to Edit</p>
        ) : (

          <Form>
            <Form.Group>
              <Form.Control className="mb-2" type="text" placeholder="ID of the item" defaultValue={editPost.id} disabled />
              <Form.Control className="mb-2" type="text" placeholder="Insert new title" defaultValue={editPost.title} />
              <Form.Control type="text" placeholder="Insert new body" defaultValue={editPost.body} />
            </Form.Group>
            <Button variant="warning" type="submit" onClick={handleEdit}>Apply</Button>
          </Form>
        )
      }
    </Fragment>
  )
}
export default EditForm;