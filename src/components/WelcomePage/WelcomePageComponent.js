import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

export default function WelcomePageComponent({ onToLoginAdress }) {
  return (
    <Jumbotron>
      <h1>Todo-list, refined!</h1>
      <p>Enjoy the beautiness of React and Redux </p>
      <p>Click on button to register or login</p>
      <Button bsStyle="info" bsSize="large" onClick={onToLoginAdress}>
        Login
      </Button>
    </Jumbotron>
  );
}
