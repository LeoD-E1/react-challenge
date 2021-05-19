import React, { Fragment } from "react";
import { Card, Button } from 'react-bootstrap';


const TableData = (props) => {

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-7">
          {props.data.length > 0 ? (
            props.data.map(item => (
              <div key={item.id} className="row">
                <div className="col-md-12">
                  <Card body>
                    {item.title}<br /><br />
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
              <h4>No items</h4>
            </div>
          )
          }
        </div>
        <div className="col-md-5"></div>
      </div>
    </Fragment >
  );
};

export default TableData;
