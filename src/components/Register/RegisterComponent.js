import React from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import Center from 'react-center';

import '../../styles/styles.css';
import { divStyle } from '../../styles/styles';

export default function RegisterComponent({
  onButtonClick,
  onUserAdd,
}) {
  return (
    <div>
      <Center>
        <h1>Register</h1>
      </Center>

      <FormGroup bsSize="large" className="col-md-6 col-md-offset-3">
        <FormControl
          type="text"
          placeholder="First Name"
          id="first"
          onChange={onUserAdd}
          required
        />
        <FormControl
          type="text"
          placeholder="Last Name"
          id="last"
          onChange={onUserAdd}
          required
          style={divStyle}
        />
        <FormControl
          type="text"
          placeholder="Description"
          id="description"
          onChange={onUserAdd}
          style={divStyle}
        />

        <div className="form-group row">
          <div className="col-xs-4">
            <FormControl
              className="inputt"
              type="text"
              placeholder="Age"
              id="age"
              onChange={onUserAdd}
              required
            />
          </div>

          <div className="col-xs-8">
            <FormControl
              id="password"
              type="password"
              placeholder="Password"
              onChange={onUserAdd}
              required
            />
          </div>
        </div>

        <Center>
          <Button
            bsStyle="primary"
            bsSize="large"
            id="register"
            onClick={onButtonClick}
          >
            Register Now!
          </Button>
        </Center>
      </FormGroup>
    </div>
  );
}
