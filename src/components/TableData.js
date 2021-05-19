import React, { Fragment } from "react";
import { Card, Button } from 'react-bootstrap';
import '../styles/TableData.css'

const TableData = (props) => {

  return (
    <Fragment>
      <div className="row" id="principal">
        <div className="col-md-12">
          {props.data.length > 0 ? ( // if have not any data for present, then show a error msje
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
      </div>
    </Fragment >
  );
};

export default TableData;
