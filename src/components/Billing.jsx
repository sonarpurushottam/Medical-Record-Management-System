import React, { useState } from "react";
import { useRecordContext } from "./RecordContext";

const Billing = () => {
  const { dispatch } = useRecordContext();
  const [patientName, setPatientName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleBillingRecord = () => {
    if (patientName && serviceDescription && amount) {
      const newBillingRecord = {
        patientName,
        serviceDescription,
        amount,
      };
      dispatch({ type: "ADD_BILLING_RECORD", payload: newBillingRecord });

      // Clear the form after submitting
      setPatientName("");
      setServiceDescription("");
      setAmount("");
    } else {
      // Handle validation or display an error message
      console.error("All fields are required");
    }
  };

  return (
    <div>
      <h2>Billing</h2>
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
          Service Description:
          <input
            type="text"
            value={serviceDescription}
            onChange={(e) => setServiceDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleBillingRecord}>
          Add Billing Record
        </button>
      </form>
    </div>
  );
};

export default Billing;
