import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { PostContext } from '../context/PostContext'

const ViewButton = (props) => {
    const { getPostById } = useContext(PostContext)
    const id = props.id

    const handleDetail = () => {
        getPostById(id)
    }

    return (
        <Button variant="success" onClick={handleDetail}>View</Button>
    )
}

export default ViewButton;