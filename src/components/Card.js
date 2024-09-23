import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function AppCard({ productProp }) {
  const { _id, name, description, price, image } = productProp;

  return (
    <Link to={`/product/${_id}`}>
      <Card
        className="card rounded-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent, #000), url(${image})`,
        }}
      >
        <Card.Body className="position-absolute bottom-0 text-white">
          <Card.Title className=" fw-bolder">{name}</Card.Title>
          <Card.Text>&#x20B1;{price}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
