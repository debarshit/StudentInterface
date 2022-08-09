import React, { useState, useContext, createContext, useEffect } from "react";

import { teachersRequest } from "./teachers.service";

export const TeachersContext = createContext();

export const TeachersContextProvider = ({ children }) => {
  const [teachers, setTeachers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveTeachers = () => {
    setIsLoading(true);

    teachersRequest()
      .then((results) => {
        setIsLoading(false);
        setTeachers(results);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };
  useEffect(() => {
    retrieveTeachers();
  }, []);

  return (
    <TeachersContext.Provider
      value={{
        teachers,
        isLoading,
        error,
      }}
    >
      {children}
    </TeachersContext.Provider>
  );
};