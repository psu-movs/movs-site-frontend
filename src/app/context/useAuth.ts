import { createContext, useContext, Dispatch, SetStateAction } from "react";
import { ClientUser } from "@/http/responseModels";

interface IContext {
  user?: ClientUser;
  setUser?: Dispatch<SetStateAction<ClientUser | undefined>>;
}

export const AuthContext = createContext<IContext>({});

export const useAuth = () => useContext(AuthContext)



