import { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { useState } from "react";
import { useEffect } from "react";
import app from "./../firebase/Firebase.config";

const auth = getAuth(app);
// google provider
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [spinner, setSpinner] = useState(true);

  //   user login this function by login
  const userLogin = (email, password) => {
    setSpinner(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   user login this function by google

  const googleLogin = () => {
    setSpinner(true);
    return signInWithPopup(auth, googleProvider);
  };

  //  user logOut this function
  const loggedOut = () => {
    setSpinner(true);
    signOut(auth);
  };

  // user osbserve this useEffect
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log("user login  ", currentUser);
      setUser(currentUser);
      setSpinner(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,

    userLogin,
    loggedOut,
    googleLogin,
    setSpinner,
    spinner,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
};

export default AuthProvider;
