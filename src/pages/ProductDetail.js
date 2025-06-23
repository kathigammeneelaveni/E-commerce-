// src/pages/ProductDetail.js
import React from 'react';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const dummyProduct = {
  id: 1,
  name: 'Stylish T-Shirt',
  description: 'High-quality cotton T-shirt in various colors.',
  price: 499,
  imageUrl: 'https://via.placeholder.com/600x400',
};

function ProductDetail() {
  const { id } = useParams();  // Get the product ID from the URL
  const product = dummyProduct; // Replace with real API call later

  return (
    <Container className="my-4">
      <Row>
        <Col md={6}>
          <Image src={product.imageUrl} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>₹{product.price}</h3>
          <Button variant="primary">Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
