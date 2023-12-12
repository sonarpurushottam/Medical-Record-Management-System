import React, { createContext, useReducer, useContext } from "react";

const RecordContext = createContext();

const initialState = {
  appointments: [],
  prescriptions: [],
  billingRecords: [],
};

const recordReducer = (state, action) => {
  switch (action.type) {
    case "ADD_APPOINTMENT":
      return {
        ...state,
        appointments: [...state.appointments, action.payload],
      };
    case "ADD_PRESCRIPTION":
      return {
        ...state,
        prescriptions: [...state.prescriptions, action.payload],
      };
    case "ADD_BILLING_RECORD":
      return {
        ...state,
        billingRecords: [...state.billingRecords, action.payload],
      };
    default:
      return state;
  }
};

const RecordProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recordReducer, initialState);

  return (
    <RecordContext.Provider value={{ state, dispatch }}>
      {children}
    </RecordContext.Provider>
  );
};

const useRecordContext = () => {
  const context = useContext(RecordContext);
  if (!context) {
    throw new Error("useRecordContext must be used within a RecordProvider");
  }
  return context;
};

export { RecordProvider, useRecordContext };
