import { useContext, createContext, useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((response) => {
        setError(null);
        localStorage.setItem("Auth Token", response._tokenResponse.refreshToken);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setError(null);
        localStorage.removeItem("Auth Token");
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const uid = currentUser.uid;
        const displayName = currentUser.displayName;
        const email = currentUser.email;
        const photoURL = currentUser.photoURL;
        const emailVerified = currentUser.emailVerified;
        setUser({ uid, displayName, email, photoURL, emailVerified });
        localStorage.setItem("Auth Token", currentUser.auth.currentUser.stsTokenManager.refreshToken);
      } else {
        setUser(null);
        localStorage.removeItem("Auth Token");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={{ googleSignIn, logOut, user }}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
