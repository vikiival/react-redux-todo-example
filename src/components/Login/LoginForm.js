import React from 'react';
import Center from 'react-center';
import { Link } from 'react-router-dom';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { inputStyle } from '../../styles/styles';

function LoginForm(props) {
  const {
    onLogin,
    onUserInput,
  } = props;
  return (
    <div>
      <Center>
        <h1>Login</h1>
      </Center>
      <Center>
        <FormGroup bsSize="large">
          <FormControl
            type="text"
            placeholder="Name"
            id="userName"
            onChange={onUserInput}
            style={inputStyle}
          />
          <FormControl
            id="password"
            label="Password"
            type="password"
            placeholder="Password"
            onChange={onUserInput}
            style={inputStyle}
          />
          <Center>
            <Link to="/">Not Registered? Register Here.</Link>
          </Center>
        </FormGroup>
      </Center>
      <Center>
        <Button onClick={onLogin} style={inputStyle}>
          Log In
        </Button>
      </Center>
    </div>
  );
}

export default LoginForm;
