import { AuthContext } from "../context/auth_context"

export const AuthProvider = ({ children }) => {


  return (
    <AuthContext.Provider value={{
      isLoggedIn: true,
    }}>
      {children}
    </AuthContext.Provider>
  );
};