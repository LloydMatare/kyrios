import { createContext } from "react";

// Define the user type
export interface UserDetail {
  id: string;
  name?: string;
  email?: string;
  credit?: number;
}

// Define the context value type
interface UserDetailContextType {
  userDetail: UserDetail | null;
  setUserDetail: (user: UserDetail | null) => void;
}

// Create context with default values
export const UserDetailContext = createContext<UserDetailContextType>({
  userDetail: null,
  setUserDetail: () => {},
});
