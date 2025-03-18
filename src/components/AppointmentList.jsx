import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const AppointmentList = ({ appointmentList, setAppointmentList }) => {
  
  const handleDelete = (id) => {
    const newAppo = appointmentList?.filter((appo) => appo.id !== id);
    setAppointmentList(newAppo);
    localStorage.setItem("appointments", JSON.stringify(newAppo));
  };

  const handleConsulted = (id) => {
    const newAppo = appointmentList?.map((appo) =>
      appo.id === id ? { ...appo, consulted: !appo.consulted } : appo,
    );
    setAppointmentList(newAppo);
    localStorage.setItem("appointments", JSON.stringify(newAppo));
  };

  return (
    <Container className="text-center bg-primary rounded-3 mt-4 py-4">
      {!appointmentList?.length ? (
        <img src="/appointment.jpg" width="70%" alt="Appointment" />
      ) : (
        appointmentList.map(({ id, patient, day, consulted, doctor }) => {
          return (
            <Row
              key={id}
              className={`mx-auto w-100 appointments my-4 d-flex align-items-center justify-content-between ${
                consulted ? "consulted" : ""
              }`}
            >
              <Col>
                <h4>{patient}</h4>
                <h5>{doctor}</h5>
              </Col>
              <Col>
                <h5>Date: {new Date(day).toLocaleDateString()}</h5>
                <h5>Time: {new Date(day).toLocaleTimeString()}</h5>
              </Col>
              <Col>
                <TiTick
                  className="text-primary display-6 me-1 cursor-pointer"
                  type="button"
                  onClick={() => handleConsulted(id)}
                />
                <MdDelete
                  className="text-primary display-6 cursor-pointer"
                  type="button"
                  onClick={() => handleDelete(id)}
                />
              </Col>
            </Row>
          );
        })
      )}
    </Container>
  );
};

export default AppointmentList;
