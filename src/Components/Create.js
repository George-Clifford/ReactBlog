import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
  const [data, setData] = useState({
    title: "",
    author: "",
    body: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
     return{ ...prev, [name]: value }
  })
}
  const handleSubmit = (e) => {
    const  {name, value}= e.target;
    setData ((prev) =>{
      return {...prev, [name]:value}});

  }

  //    .catch(err => console.log (err))
  //     .catch(err =>{
  //    toast.error("An error Occured while adding the blog",{
  //     position: toast.POSITION.TOP_RIGHT,
  //      autoClose:3000,
  //    })
  //   })
  // };

   
    



  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="Title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" onChange={handleChange} name="title" />
      </Form.Group>

      <Form.Group controlId="Author">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text"  placeholder="Enter author" onChange={handleChange} name="author" />
      </Form.Group>

      <Form.Group controlId="Body">
        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Enter blog content" onChange={handleChange} name="body"/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Save Blog
      </Button>
      <ToastContainer/>
    </Form>
  );
}



export default Create;