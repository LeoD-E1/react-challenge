import React, { useState } from "react";
import { Fragment } from "react";
import { Form } from "react-bootstrap";
import EditForm from '../components/EditForm';
import CreateForm from '../components/CreateForm';

const DropdownController = () => {

  const [mode, setMode] = useState(false)

  const changeState = () => {
    setMode(prevMode => !prevMode)
    console.log(mode)
  }

  return (
    <Fragment>

      <div className="check-switch">
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Edit"
          onClick={changeState}
        />
      </div>

      <div className="form-container">
        {
          mode === false ? (
            <CreateForm />
          ) : (
            <EditForm />
          )
        }
      </div>

    </Fragment>
  );
};

export default DropdownController;
