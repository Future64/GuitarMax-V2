import React, { createContext, useState } from "react";

export const UserInputContext = createContext();

const UserInputContextProvider = (props) => {
  const [userInputs, setUserInputs] = useState({
    submit: false,
    alt: "",
    note: "C",
    scale: "Majeure naturel",
    tonique: "",
    tierce: "",
    quinte: "",
    septieme: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setUserInputs({ ...userInputs, [e.target.id]: e.target.value });
    // if (userInputs.submit === true) {
    // }
  };

  return (
    <UserInputContext.Provider value={{ handleInputChange, userInputs }}>
      {props.children}
    </UserInputContext.Provider>
  );
};

export default UserInputContextProvider;
