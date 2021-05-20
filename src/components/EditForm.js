import React from 'react';
import { Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';

const EditForm = () => {

  const detectID = () => {

  }

  return (
    <Fragment>
      <h3>Edit Item</h3>
      <Form>
        <Form.Group>
          <Form.Control className="mb-2" type="text" placeholder="ID of the item" onKeyUp={detectID} />
          <Form.Control className="mb-2" type="text" placeholder="Insert new title" />
          <Form.Control type="text" placeholder="Insert new body" />
        </Form.Group>
        <Button variant="warning" type="submit">Apply</Button>
      </Form>

    </Fragment>
  )
}
export default EditForm;