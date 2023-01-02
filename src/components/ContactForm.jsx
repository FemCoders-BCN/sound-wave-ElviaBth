import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../styles/ContactForm.css';

function ContactForm() {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setValidated(true);
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    console.table(values);
    setTimeout(() => {
      setValidated(false);
      setValues({
        userName: "",
        email: "",
        password: ""
      })
    }, 2000);
  };

  function handleChange(event) {
    const { target } = event;
    const { name, value } = target;

    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='formulary'>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label htmlFor='userName'>Name:</Form.Label>
          <Form.Control
            required
            id='userName'
            name= "userName"
            type="text"
            autoFocus
            tabIndex="1"
            value={values.userName}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid name.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group>
        <Form.Label htmlFor='email'>Email:</Form.Label>
        <Form.Control 
        required
        id='email'
        name='email'
        type="email" 
        tabIndex="2"
        value={values.email}
        onChange={handleChange}
        />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email address.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label htmlFor='password'>Password:</Form.Label>
          <Form.Control 
          id='password'
          name='password'
          type="password" 
          minLength="2" 
          maxLength="6"
          required 
          tabIndex="3"
          value={values.password}
          onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button 
        size="sm" 
        type="submit"
        tabIndex="4">
        Join Now
      </Button>
    </Form>
  );
}

export default ContactForm