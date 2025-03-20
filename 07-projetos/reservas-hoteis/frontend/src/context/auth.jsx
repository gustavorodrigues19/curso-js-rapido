import { createContext, useContext, useState } from "react";
import { login } from "../api";

const AuthContext = createContext({
  user: null,
  isLoading: true,
  isAuthenticated: false,
  handleLogin: () => {},
  handleLogout: () => {},
});

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (email, password) => {
    try {
      const response = await login(email, password);
      localStorage.setItem("token", response.token);
      setUser(response.data);
      setIsAuthenticated(true);
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, isAuthenticated, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
