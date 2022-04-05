import React, { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../Components/Firebase/firebase";

import {
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInAnonymously,
  signInWithRedirect
} from "firebase/auth";

// Create Context
const userAuthContext = createContext();

//  to wrap the component with the context , children => components
export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // login with google
  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithRedirect(auth, googleProvider);
  };

  // login with anonymous
  const anonymousSignIn = () => {
    return signInAnonymously(auth);
  };

  // to logout user
  const logOut = () => {
    return signOut(auth);
  };

  //  whenever user is created or existing user is logged in
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <>
      <userAuthContext.Provider
        value={{
          user,
          logOut,
          googleSignIn,
          anonymousSignIn
        }}
      >
        {children}
      </userAuthContext.Provider>
    </>
  );
};

//  Use Context and to get the value
export const useUserAuth = () => {
  return useContext(userAuthContext);
};
