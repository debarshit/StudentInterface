import React, { useState, useContext, createContext, useEffect } from "react";
import { Text } from "react-native";

import { teachersRequest } from "./teachers.service";

import { LocationContext } from "../location/location.context";

export const TeachersContext = createContext();

export const TeachersContextProvider = ({ children }) => {
  const [teachers, setTeachers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveTeachers = (loc) => {
    setIsLoading(true);
    setTeachers([]);

    if (loc === "kanpur") {
      teachersRequest(loc)
        .then((results) => {
          setIsLoading(false);
          setTeachers(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    } else {
      <Text>We are currently not available in this location.</Text>
    }
  };
  useEffect(() => {
    if (location) {
      retrieveTeachers(location);
    }
  }, [location]);

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