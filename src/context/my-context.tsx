import React, { useEffect } from "react";
import axios from "axios";

export const AuthContext = React.createContext<any>(undefined);

//const persistedState = JSON.parse(window.localStorage['persistedState']);
export const AuthProvider: React.FC = ({ children }) => {
  const [authValues, setAuthValues] = React.useState<any>({
    authenticated: false,
    user: null,
  });

  useEffect(() => {
    window.localStorage['persistedState'] = JSON.stringify({
      user: authValues.user
    });
  }, [authValues])

  const login = async ({ user, password }: { user: string; password: string }) => {
    const api = axios.create({
      baseURL: `http://localhost/sistemaPAI/api`,
      withCredentials: false,
    });
    const loginData = {
      nombreUsuario: user,
      contrasena: password,
    };
    return api.post("/login", loginData)
      .then(res => {
        return new Promise((resolve) => {
          setAuthValues({
            authenticated: true,
            user: res.data
          });
          resolve(true);
        })
          .catch(error => {
            return new Promise((resolve) => {
              setAuthValues({
                authenticated: false,
                user: null
              });
              resolve(false);
            })
          })
      })
  }

  const logout = () => {
    setAuthValues({
      authenticated: false,
      user: null,
    });
    return Promise.resolve(true);
  };

  let state = {
    authValues,
    setAuthValues,
    login,
    logout,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export default AuthContext;
