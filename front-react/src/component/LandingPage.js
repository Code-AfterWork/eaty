import React from 'react';
import { Container, Button } from 'react-bootstrap';

export const LandingPage = () => {
  return (
    <Container className="text-center">
      <div>
        <h1>Pss! Pss! Looking for what to eat?</h1>
        <p>
          I will help you find what to cook
        </p>
        <Button variant="primary">Generate Meal</Button>
      </div>
    </Container>
  );
};