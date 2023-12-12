import React, { useState } from "react";
import { useRecordContext } from "./RecordContext";

const AppointmentScheduler = () => {
  const { dispatch } = useRecordContext();
  const [patientName, setPatientName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const handleAppointment = () => {
    if (patientName && appointmentDate && appointmentTime) {
      const newAppointment = {
        patientName,
        appointmentDate,
        appointmentTime,
      };
      dispatch({ type: "ADD_APPOINTMENT", payload: newAppointment });

      // Clear the form after submitting
      setPatientName("");
      setAppointmentDate("");
      setAppointmentTime("");
    } else {
      // Handle validation or display an error message
      console.error("All fields are required");
    }
  };

  return (
    <div>
      <h2>Appointment Scheduler</h2>
      <form>
        <label>
          Patient Name:
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Appointment Date:
          <input
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Appointment Time:
          <input
            type="time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleAppointment}>
          Schedule Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentScheduler;
