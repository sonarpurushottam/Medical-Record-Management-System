import React, { useState } from "react";
import { useRecordContext } from "./RecordContext";

const PrescriptionManagement = () => {
  const { dispatch } = useRecordContext();
  const [patientName, setPatientName] = useState("");
  const [medication, setMedication] = useState("");
  const [dosage, setDosage] = useState("");

  const handlePrescription = () => {
    if (patientName && medication && dosage) {
      const newPrescription = {
        patientName,
        medication,
        dosage,
      };
      dispatch({ type: "ADD_PRESCRIPTION", payload: newPrescription });

      // Clear the form after submitting
      setPatientName("");
      setMedication("");
      setDosage("");
    } else {
      // Handle validation or display an error message
      console.error("All fields are required");
    }
  };

  return (
    <div>
      <h2>Prescription Management</h2>
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
          Prescribed Medication:
          <input
            type="text"
            value={medication}
            onChange={(e) => setMedication(e.target.value)}
          />
        </label>
        <br />
        <label>
          Dosage:
          <input
            type="text"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handlePrescription}>
          Add Prescription
        </button>
      </form>
    </div>
  );
};

export default PrescriptionManagement;
