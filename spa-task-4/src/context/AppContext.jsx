import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [userName, setUserName] = useState("Codveda Intern");

  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      {children}
    </AppContext.Provider>
  );
}
