import { useEffect, useState } from "react";
import { AuthContext } from "../context/auth_context"
import {AppStorage} from "../../base/app_storage";
import { authApi } from "../../datasource/remote/auth/auth_api";

export const AUTJ_KEY = "isLoggedIn"

export const AuthProvider = ({ children, fallback }) => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [isLoading, setIsloading] = useState(true);

  const saveLoginState = async (state) => AppStorage.save(AUTJ_KEY, state);
  const getLoginState = async () => AppStorage.get(AUTJ_KEY);
  const removeLoginState = async () => AppStorage.remove(AUTJ_KEY);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const loginState = await getLoginState();
        if (!loginState) return;
        setIsloggedIn(loginState);
      } catch (error) {
        console.log(error)
      }finally{
        setIsloading(false);
      }
    };

    initAuth();
  }, [])

  const login = async (email, password) => {
    if (email!=="admin@example" || password!=="admin") return ;
    setIsloggedIn(true);
    saveLoginState(true);
  }
  
  const logout = async () => {
    setIsloggedIn(false);
    removeLoginState();
  };

  /* useEffect(() => {
    authApi.interceptors.request.use(
      async (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    authApi.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response.status === 401) await logout();
        return Promise.reject(error);
      }
    );
  }, []); */

  if (fallback && isLoading) return fallback;


  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>)
};

