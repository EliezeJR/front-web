import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddEstudiante = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [genero, setGenero] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nombre, apellidos, genero });
    setNombre('');
    setApellidos('');
    setGenero('');
  };
  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="nombre">
      <Form.Label>Nombre</Form.Label>
      <Form.Control
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
    </Form.Group>
    <Form.Group controlId="apellidos">
      <Form.Label>Apellidos</Form.Label>
      <Form.Control
        type="text"
        value={apellidos}
        onChange={(e) => setApellidos(e.target.value)}
      />
    </Form.Group>
    <Form.Group controlId="genero">
      <Form.Label>Género</Form.Label>
      <Form.Control
        type="text"
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
      />
    </Form.Group>
    <Button variant="primary" type="submit">
      Agregar estudiante
    </Button>
  </Form>
  )
}

export default AddEstudiante