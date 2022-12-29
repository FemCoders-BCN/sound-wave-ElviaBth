import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../styles/Formulary.css';

function Formulary() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='formulary'>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            required
            type="text"
            autoFocus
            tabIndex="1"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid name.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email:</Form.Label>
        <Form.Control 
        required
        type="email" 
        tabIndex="2"
        />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email address.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Password:</Form.Label>
          <Form.Control 
          type="password" 
          minLength="8" 
          maxLength="15"
          required 
          tabIndex="3"
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

export default Formulary