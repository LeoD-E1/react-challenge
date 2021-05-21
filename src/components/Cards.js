import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap';
import DeleteButton from './DeleteButton';
import ViewButton from './ViewButton';
import EditButton from './EditButton';


const Cards = (props) => {
  return (
    <Fragment>
      {
        props.blogs.map(data => (
          <Card key={data.id} body className="mb-2">
            {data.title}<br /><br />
            <div>
              <ViewButton />&nbsp;
              <EditButton /> &nbsp;
              <DeleteButton />
            </div>
          </Card>
        ))
      }
    </Fragment>
  )
}

export default Cards;