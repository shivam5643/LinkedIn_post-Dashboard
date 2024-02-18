// FormDataContext.js
import React, { createContext, useContext, useState } from 'react';

const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState(null);

  const storeFormData = (data) => {
    setFormData(data);
    // console.log(data); // Log the new data immediately after setting it
  };

  return (
    <FormDataContext.Provider value={{ formData, storeFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => useContext(FormDataContext);
