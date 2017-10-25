import React, {Component} from 'react';
import {Modal,Button} from "react-bootstrap";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: this.props.hasError };
    }
  
    componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
      logErrorToMyService(error, info);
    }
  
    render() {
        console.log("ErrorBoundary",this.props);
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return {modalInstance}
      }
      return this.props.children;
    }
  }

  const modalInstance = (
    <div className="static-modal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Stale Data</Modal.Title>
        </Modal.Header>
  
        <Modal.Body>
          The data u r trying to update is stale.
        </Modal.Body>
  
        <Modal.Footer>
          
          <Button bsStyle="primary">Ok</Button>
        </Modal.Footer>
  
      </Modal.Dialog>
    </div>
  );

  export default ErrorBoundary;