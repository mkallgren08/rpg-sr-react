import React, { Component } from "react";
import { Modal, Button} from 'react-bootstrap';
class FormCheckModal extends Component {

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onClick}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onClick}>
            Close
        </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default FormCheckModal;