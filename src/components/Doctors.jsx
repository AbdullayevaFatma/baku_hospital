import React, { useState } from "react";
import { doctors } from "../helpers/data";
import { Col, Container, Image, Row } from "react-bootstrap";
import AddModal from "./AddModal";
import { FaHospital } from "react-icons/fa";

const Doctors = ({ appointmentList, setAppointmentList }) => {
  const [show, setShow] = useState(false);
  const [drName, setDrName] = useState("");

  const addAppointment = (newAppo) => {
    const data = setAppointmentList([...appointmentList, newAppo]);
    localStorage.setItem("appointments", JSON.stringify(data));
  };
  const handleClose = () => setShow(false);

  return (
    <Container className=" my-5 text-center">
      
      <div style = {{backgroundColor: "#C0DCFC"}} className="py-3 rounded-2 my-4">
        <FaHospital  className="text-primary display-6 "/>
        <h3 className="text-primary">Baku Hospital</h3>
       
       
        <h3 className="text-light">Our Doctors</h3>
        </div>
      
      <Row className="gap-2  d-flex justify-content-center align-items-center m-auto w-100 ">
        {doctors.map(({ id, name, img, dep }) => (
          <>
            <Col
              className="doctors-image"
              xs={6}
              sm={4}
              lg={3}
              key={id}
              onClick={() => {
                setShow(true);
                setDrName(name);
              }}
            >
              <Image
                src={img}
                alt={name}
                thumbnail
                rounded
                className="w-100 doctor-img"
              />
              <div className="doctors-info">
                <h5>{name}</h5>
                <p>{dep}</p>
              </div>
            </Col>
          </>
        ))}
      </Row>
      <AddModal
        show={show}
        handleClose={handleClose}
        drName={drName}
        addAppointment={addAppointment}
      />
    </Container>
  );
};

export default Doctors;
