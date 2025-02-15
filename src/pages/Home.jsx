import React, { useEffect, useState } from "react";
import Doctors from "../components/Doctors";
import AppointmentList from "../components/AppointmentList";
import { Container } from "react-bootstrap";
import { getAppointmentListFromLocal } from "../helpers/utils";

const Home = () => {
  const [appointmentList, setAppointmentList] = useState(
    getAppointmentListFromLocal()
  );

  return (
    <Container>
      <Doctors
        appointmentList={appointmentList}
        setAppointmentList={setAppointmentList}
      />
      <AppointmentList
        appointmentList={appointmentList}
        setAppointmentList={setAppointmentList}
      />
    </Container>
  );
};

export default Home;
