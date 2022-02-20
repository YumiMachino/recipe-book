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

  //state変更の限り実行し続ける
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User

  //     console.log('user is signed in ', user);
  //     setUser({ email: 'adasdasdasfa', password: 'adasadfdsfsdf' });
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //     console.log('user is signed out ', user);
  //     setUser(null);
  //   }
  // });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// user sign in-> store user email, uid to database(with empty properties such us recipes)

// mypage -> uid からユーザー情報を引っ張ってくる
