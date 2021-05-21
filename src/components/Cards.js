import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap';
import DeleteButton from './DeleteButton';
import ViewButton from './ViewButton';
import EditButton from './EditButton';


const Cards = (props) => {
  return (
    <Fragment>
      {
        props.posts.map(data => (
          <Card key={data.id} body className="mb-2">
            {data.title}<br /><br />
            <div>
              <ViewButton id={data.id} />&nbsp;
              <EditButton id={data.id} /> &nbsp;
              <DeleteButton id={data.id} />
            </div>
          </Card>
        ))
      }
    </Fragment>
  )
}

export default Cards;