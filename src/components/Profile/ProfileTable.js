import React from 'react';
import { Grid, Row, Col, Panel, FormGroup, FormControl } from 'react-bootstrap';

import ProfileTodo from './ProfileTodo';

function ProfileTable({ todos, onSynchronize, memos }) {
  return (
    <Grid>
      <Row className="show-grid">
        <Col sm={6} md={3}>
          <Panel collapsible defaultExpanded header="Active Todos">
            {todos.map(todo => (
              <ProfileTodo
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
              />),
            )}
          </Panel>
        </Col>

        <Col sm={6} md={4}>
          <FormGroup controlId="formControlsTextarea">
            <FormControl
              componentClass="textarea"
              placeholder="Enter your memos here.."
              rows="16"
              value={memos}
              onChange={onSynchronize}
            />
          </FormGroup>
        </Col>
      </Row>
    </Grid>
  );
}

export default ProfileTable;
