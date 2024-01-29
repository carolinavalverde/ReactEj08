import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { nombre, apellido, dni, email } = formData;

    if (nombre && apellido && dni && email) {
      // Guardar en el local storage (puedes ajustar según tus necesidades)
      localStorage.setItem('userData', JSON.stringify(formData));

      // Mostrar alerta de datos enviados
      Swal.fire('Datos enviados', '', 'success');
    } else {
      // Mostrar alerta de completar todos los datos
      Swal.fire('Completar todos los datos', '', 'error');
    }
  };

  return (
    <Form>
      <Form.Group controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name="nombre" onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="apellido">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" name="apellido" onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="dni">
        <Form.Label>DNI</Form.Label>
        <Form.Control type="text" name="dni" onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" onChange={handleChange} />
      </Form.Group>

      <Button variant="primary" onClick={handleSubmit}>
        Enviar
      </Button>
    </Form>
  );
};

export default Formulario;
