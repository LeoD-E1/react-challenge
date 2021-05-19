import React from 'react';
import { Fragment } from 'react';
import { Form, Button } from 'react-bootstrap'

const CreateForm = () => {
  return (
    <Fragment>
      <Form>
        <Form.Group>
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
export default CreateForm;