import { createContext, useContext, Dispatch, SetStateAction } from "react";
import { User } from "@/http/responseModels";

interface IContext {
  user?: User;
  setUser?: Dispatch<SetStateAction<User | undefined>>;
}

export const AuthContext = createContext<IContext>({});

export const useAuth = () => useContext(AuthContext)



