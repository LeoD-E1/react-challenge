import React from 'react';
import { Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';

const EditForm = () => {

  const detectID = () => {

  }

  return (
    <Fragment>
      <br />
      <Form>
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="ID" onKeyUp={detectID} />
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" />
          <Form.Label>Body</Form.Label>
          <Form.Control type="text" placeholder="Body" />
        </Form.Group>
        <Button variant="primary" type="submit"> Submit</Button>
      </Form>

    </Fragment>
  )
}
export default EditForm;