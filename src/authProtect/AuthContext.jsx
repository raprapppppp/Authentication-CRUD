import { createContext, useState, useEffect } from "react";
import { auth } from "../FIrebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export const context = createContext();

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = async () => {
      await onAuthStateChanged(auth, (currentUser) => {
        setLoading(false);
        if (currentUser) {
          setUser(currentUser);
        } else {
          setUser(null);
        }
      });
    };

    unsubscribe();
  }, []);

  const value = {
    user: user,
    setUser: setUser,
  };

  return (
    <context.Provider value={value}>{!loading && children}</context.Provider>
  );
};
