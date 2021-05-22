import React, { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { PostContext } from '../context/PostContext'
import EditForm from './EditForm'

const EditButton = (props) => {

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const id = props.id
  const { getPostById } = useContext(PostContext);

  const handleEdit = () => {
    handleShow()
    getPostById(id)
  }

  return (
    <>
      <Button variant="primary" onClick={handleEdit}>Edit</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton><h3>Edit Item</h3></Modal.Header>
        <Modal.Body>
          <EditForm />
        </Modal.Body>
      </Modal>
    </>

  )
}

export default EditButton;