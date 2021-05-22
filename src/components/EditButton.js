import React, { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { PostContext } from '../context/PostContext'
import EditForm from './EditForm'

const EditButton = (props) => {

  let { handleEdit, extractData } = useContext(PostContext);

  const [show, setShow] = useState(false)

  const handleClose = () => {
    setShow(false);
    handleEdit()
  }

  const handleShow = () => setShow(true);

  const id = props.id

  const actionEdit = () => {
    handleShow()
    extractData(id)
  }

  return (
    <>
      <Button variant="primary" onClick={actionEdit}>Edit</Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton><h3>Edit Item</h3></Modal.Header>
        <Modal.Body>
          <EditForm />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default EditButton;