import React, { useState, useEffect } from "react";
import { Modal, ListGroup } from "react-bootstrap";
import styled from "styled-components";

const StyledModal = styled(Modal)`
  .modal-title {
    color: #11bdf6;
    text-align: center;
  }
`;

const StledGroup = styled(ListGroup)`
  .list-group-item:first-child {
    background-color: #11bdf6;
    color: #fff;
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
  }
`;

const LandingPopup = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if the modal has been shown before
    const hasModalBeenShown = sessionStorage.getItem("hasModalBeenShown");

    // If it hasn't been shown, display the modal
    if (!hasModalBeenShown) {
      setShowModal(true);
      sessionStorage.setItem("hasModalBeenShown", "true");
    }

    const clearSessionInterval = setInterval(() => {
      // Clear the session after 3 minutes
      sessionStorage.clear();
      // Reset the modal flag in sessionStorage
      sessionStorage.setItem("hasModalBeenShown", "false");
      setShowModal(true);
    }, 3 * 60 * 1000); // Clear session every 3 minutes

    // Clean up the intervals when the component is unmounted
    return () => {
      clearInterval(clearSessionInterval);
      // Additional cleanup logic if needed
    };
  }, []);

  const handleClose = () => setShowModal(false);

  return (
    <>
      {/* Modal */}
      <StyledModal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>JAVA FULL STACK TRAINING</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StledGroup>
            <ListGroup.Item>Online Training Details:</ListGroup.Item>
            <ListGroup.Item>Time: 7:00 AM (IST)</ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <span>Zoom Link:</span>
              <a
                href="https://zoom.us/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Event
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <span>Password:</span>
              <p className="mb-0">000123</p>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <span>Contact:</span>
              <p className="mb-0">+91 9392926261</p>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <span>Website:</span>
              <a
                href="http://www.vanarait.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.vanarait.com
              </a>
            </ListGroup.Item>
          </StledGroup>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Save changes
          </Button>
        </Modal.Footer> */}
      </StyledModal>
    </>
  );
};

export default LandingPopup;
