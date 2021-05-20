import React from 'react'
import { Fragment } from 'react';
import { Card, Button } from 'react-bootstrap';

const Cards = (props) => {
  return (
    <Fragment>
      {
        props.blogs.map(data => (
          <Card key={data.id} body className="mb-2">
            {data.title}<br /><br />
            <div>
              <Button variant="success">View</Button> &nbsp;
              <Button variant="primary">Edit</Button> &nbsp;
              <Button variant="danger"> Delete</Button>
            </div>
          </Card>
        ))
      }
    </Fragment>
  )
}

export default Cards;