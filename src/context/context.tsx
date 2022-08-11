import React, { createContext } from "react";

export const FormContext = createContext("");

interface Props {
  children: React.ReactNode;
}

const FormContextController = ({ children }: Props) => {
  return <FormContext.Provider value="">{children}</FormContext.Provider>;
};

export default FormContextController;
