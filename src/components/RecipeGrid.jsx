import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import uuid from "react-uuid";
const RecipeGrid = ({
  image,
  label,
  calories,
  dietLabels,
  cuisineType,
  ingredient,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="col-md-3">
      <div className="content">
        <Card style={{ width: "auto" }}>
          <div className="geeks">
            <Card.Img variant="top" src={image} className="img-fluid" />
          </div>

          <Card.Body>
            <Card.Title>
              <b>{label}</b>
            </Card.Title>
            <Card.Text>
              {label} contains the calories upto {calories} and it contains{" "}
              {dietLabels} and it is {cuisineType} dish.
            </Card.Text>
            <Button variant="outline-secondary" onClick={handleShow}>
              View Ingredient
            </Button>
          </Card.Body>
        </Card>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ingredients</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {ingredient.map((el) => (
              <ul key={uuid()}>
                <li>{el}</li>
              </ul>
            ))}
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default RecipeGrid;
