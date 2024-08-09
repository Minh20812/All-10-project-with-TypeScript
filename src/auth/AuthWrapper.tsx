import { createContext, useContext, useState } from "react";
import Header from "../component/structure/Header";
import {
  RenderMenu,
  RenderRoutes,
} from "../component/structure/RenderNavigation";

interface User {
  email: string;
  token: string;
  isAuthenticated: boolean;
}

interface AuthContextType {
  user: User;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: { email: "", token: "", isAuthenticated: false },
  login: () => Promise.resolve(),
  logout: () => {},
});

export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
  const [user, setUser] = useState<User>({
    email: "",
    token: "",
    isAuthenticated: false,
  });

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      setUser({ email, token: data.token, isAuthenticated: true });
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser({ email: "", token: "", isAuthenticated: false });
  };

  const authContextValue: AuthContextType = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <>
        <Header />
        <RenderMenu />
        <RenderRoutes />
      </>
    </AuthContext.Provider>
  );
};
