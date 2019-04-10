import React, { Component } from "react";
import { Modal, Button } from 'react-bootstrap';

class SessionCheckRenewal extends Component {

  render() {
    return (
      <Modal show={this.props.show}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You are going to be automatically logged out in {this.props.time} seconds.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.renew}>
            Continue
          </Button>
          <Button onClick={this.props.logout}>
            Logout
          </Button>
          {/* <Button onClick={this.props.onClick}>
            Close
        </Button> */}
        </Modal.Footer>
      </Modal>
    )
  }
}

export default SessionCheckRenewal;