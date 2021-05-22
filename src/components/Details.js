import React, { useContext } from 'react';
import { PostContext } from '../context/PostContext';
import { Card } from 'react-bootstrap';

const Details = () => {

  const { detailPost } = useContext(PostContext);

  return (
    <>
      {
        detailPost == null ? (
          <div>
            <h3 className="warning">No Item Selected</h3>
          </div>

        ) : (

          <Card style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Title>{detailPost.id}</Card.Title>
              <Card.Subtitle><b>{detailPost.title}</b></Card.Subtitle><br />
              <Card.Text>
                {detailPost.body}
              </Card.Text>
            </Card.Body>
          </Card>
        )
      }
    </>
  )
}

export default Details;
