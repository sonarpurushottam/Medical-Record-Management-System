import React from "react";
import { RecordProvider } from "./components/RecordContext";
import AppointmentScheduler from "./components/AppointmentScheduler";
import PrescriptionManagement from "./components/PrescriptionManagement";
import Billing from "./components/Billing";

const App = () => {
  return (
    <RecordProvider>
      <div>
        <AppointmentScheduler />
        <PrescriptionManagement />
        <Billing />
      </div>
    </RecordProvider>
  );
};

export default App;
