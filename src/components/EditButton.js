import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { PostContext } from '../context/PostContext'

const EditButton = (props) => {

    const { switchForm, updatePostById } = useContext(PostContext)
    const id = props.id
    const handleEdit = () => {
        console.log(typeof (switchForm))
    }

    return (
        <Button variant="primary" onClick={handleEdit}>Edit</Button>
    )
}

export default EditButton;