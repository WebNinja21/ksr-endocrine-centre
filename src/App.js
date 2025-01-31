// App.js
import React, { useState } from "react";
import AppointmentForm from "./Components/AppointmentForm";
import AppointmentList from "./Components/AppointmentList";
import HeroComponent from "./Components/HeroComponent";
import './App.css';
import Container from 'react-bootstrap/Container';


const App = () => {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const deleteAppointment = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
  };

  const editAppointment = (index, updatedAppointment) => {
    const updatedAppointments = [...appointments];
    updatedAppointments[index] = updatedAppointment;
    setAppointments(updatedAppointments);
  };

  const clearAppointments = () => {
    setAppointments([]);
  };

  return (
    <div>
     
      <HeroComponent />
       <Container><h1>Appointment Management System</h1></Container>
      <AppointmentForm addAppointment={addAppointment} />
      <AppointmentList
        appointments={appointments}
        deleteAppointment={deleteAppointment}
        clearAppointments={clearAppointments}
        editAppointment={editAppointment}
      />
      
    </div>
  );
};

export default App;
