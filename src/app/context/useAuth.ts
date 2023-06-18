import { createContext, useContext } from "react";
import { ClientUser } from "@/http/responseModels";

interface IContext {
  user?: ClientUser;
}

export const AuthContext = createContext<IContext>({});

export const useAuth = () => useContext(AuthContext)



