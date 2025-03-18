import { createContext, useState, useContext } from "react";

// ✅ Create the AuthContext
const AuthContext = createContext();

// ✅ Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Create a custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
