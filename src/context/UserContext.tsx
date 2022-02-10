import { useState, createContext } from 'react';
import { UserDataType } from '../data/UserData';

type UserContextType = {
  user: UserDataType | null;
  setUser: React.Dispatch<React.SetStateAction<UserDataType | null>>;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<UserDataType | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
