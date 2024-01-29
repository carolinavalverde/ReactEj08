import React from "react";
import { Card, Button } from "react-bootstrap";

const EmpleadoCard = ({ empleado, eliminarEmpleado }) => {
  return (
    <Card className="d-flex mb-3">
      <div className="row g-0">
        <div className="col-4">
          <Card.Img src={empleado.pic} className="h-75 my-auto img-fluid" />
        </div>
        <div className="col-8">
          <Card.Body>
            <Card.Title className="text-uppercase">
              {empleado.fullName}
            </Card.Title>
            <Card.Text className="text-capitalize">
              <strong>{empleado.title}</strong> - {empleado.department}
            </Card.Text>
            <Button
              variant="danger"
              onClick={() => eliminarEmpleado(empleado.id)}
            >
              Eliminar
            </Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default EmpleadoCard;
