import React, { Fragment } from "react";
import { Card, Button, Spinner } from 'react-bootstrap';
import '../styles/TableData.css'

const TableData = (props) => {

  return (
    <Fragment>
      <div className="row" id="principal">
        <div className="col-md-12">
          {props.items.length > 0 ? ( // if have not any data for present, then show a error msje
            props.items.map(data => (
              <div key={data.id} className="row">
                <div className="col-md-12">
                  <Card body className="mb-2">
                    {data.title}<br /><br />
                    <div>
                      <Button variant="success">View</Button> &nbsp;
                      <Button variant="primary">Edit</Button> &nbsp;
                      <Button variant="danger"> Delete</Button>
                    </div>
                  </Card>
                </div>
              </div>
            ))
          ) : (
            <div>
              <Spinner animation="border" role="status" variant="primary">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          )
          }
        </div>
      </div>
    </Fragment >
  );
};

export default TableData;
