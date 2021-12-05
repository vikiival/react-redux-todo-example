import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import Dropzone from 'react-dropzone';

import { dropzone } from '../../styles/styles';

class ProfileFileUpload extends Component {
  constructor() {
    super();
    this.state = {
      files: [],
    };
  }
  onDrop = files => {
    this.setState({
      files: [...this.state.files, ...files],
    });
  }
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col sm={6} md={3}>
            <Dropzone onDrop={this.onDrop} style={dropzone}>
              <div style={{ margin: '100px' }}>Drop files here..</div>
            </Dropzone>
          </Col>
          <Col sm={6} md={2}>
            <Panel collapsible defaultExpanded header="Dropped Files">
              <ul>
                {this.state.files.map(f =>
                  (<li> {f.name} </li>),
                )}
              </ul>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ProfileFileUpload;
