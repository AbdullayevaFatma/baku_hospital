import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AddModal({ show, handleClose, drName, addAppointment }) {
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");

  const today = new Date();
  today.setHours(today.getHours() + 1);
  const currentDateTime = today.toISOString().slice(0, 16);
  console.log(currentDateTime);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (patientName && date) {
      addAppointment({
        id: crypto.randomUUID(),
        patient: patientName,
        day: date,
        consulted: false,
        doctor: drName,
      });
      setPatientName("");
      setDate("");
      handleClose();
    } else {
      alert("Please fill Patient Name and Date sections");
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter patient name"
                onChange={(e) => setPatientName(e.target.value)}
                value={patientName}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="Date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                min={currentDateTime}
              />
            </Form.Group>
            <div className="text-center d-flex gap-3 align-items-center justify-content-end">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
