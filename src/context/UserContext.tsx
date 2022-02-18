import { useState, createContext } from 'react';
import { UserDataType } from '../data/UserData';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';

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

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User

      console.log('user is signed in ');
      setUser({ email: 'adasdasdasfa', password: 'adasadfdsfsdf' });
      // ...
    } else {
      // User is signed out
      // ...
      console.log('user is signed out ');
      setUser(null);
    }
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
