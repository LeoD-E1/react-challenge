import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { PostContext } from '../context/PostContext'

const DeleteButton = (props) => {

    const { deletePostById } = useContext(PostContext)
    const id = props.id
    const handleDelete = (e) => {
        deletePostById(id)
    }

    return (
        <Button variant="danger" onClick={handleDelete}> Delete</Button>
    )
}

export default DeleteButton;