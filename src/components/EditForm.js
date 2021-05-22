import React, { useContext } from 'react';
import { Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import { PostContext } from '../context/PostContext'

const EditForm = () => {

  const { detailPost } = useContext(PostContext)

  return (
    <Fragment>
      {
        detailPost == null ? (
          <p>No item to Edit</p>
        ) : (
          <Form>
            <Form.Group>
              <Form.Control className="mb-2" type="text" placeholder="ID of the item" defaultValue={detailPost.id} disabled />
              <Form.Control className="mb-2" type="text" placeholder="Insert new title" defaultValue={detailPost.title} />
              <Form.Control type="text" placeholder="Insert new body" defaultValue={detailPost.body} />
            </Form.Group>
            <Button variant="warning" type="submit">Apply</Button>
          </Form>
        )
      }

    </Fragment>
  )
}
export default EditForm;