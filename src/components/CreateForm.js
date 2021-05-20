import React, { useState } from 'react';
import { Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const CreateForm = () => {

  const [item, setItem] = useState({
    title: '',
    body: '',
    userId: uuidv4()
  })

  const handleChange = (data) => {
    setItem({
      ...item,
      [data.target.name]: data.target.value
    })
  }

  const validation = (e) => {
    e.preventDefault() // so that the function is not executed automatically and it is not sent by GET method

    let boxTitle = document.getElementById("text-box-title").value;
    let boxBody = document.getElementById("text-box-body").value;

    if (boxTitle === '' || boxBody === '') {
      alert('All fields are required')
      return false
    } else {
      handleSubmit()
      e.target.reset();
    }
  }

  const fetchApi = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: item.title,
        body: item.body,
        userId: item.userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  // Function for send a item created by user with a endpoint of json placeholder
  const handleSubmit = (e) => {
    try {
      fetchApi()
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Fragment>
      <h3>Create Item</h3>
      <Form onSubmit={validation}>
        <Form.Group>
          <Form.Control className="mb-2" id="text-box-title" type="text" placeholder="Insert title" name="title" onChange={handleChange} />
          <Form.Control id="text-box-body" type="text" placeholder="Insert body" name="body" onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">Create</Button>
      </Form>
    </Fragment>
  )
}
export default CreateForm;