"use client";

import { AuthContext } from "./useAuth";
import { ReactNode, useEffect, useState } from "react";
import { ClientUser } from "@/http/responseModels";
import httpClient from "@/http";

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<ClientUser>();

  useEffect(() => {
    httpClient.setToken(window.localStorage.getItem("token"));

    httpClient.getMe().then((response) => {
      if (!response || response.error) {
        setUser(undefined);
      } else {
        setUser(response);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
