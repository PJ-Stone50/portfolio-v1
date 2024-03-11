import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"; // Ensure this points to your Firebase auth configuration
// import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [fullName, setFullName] = useState(""); // State to store fullname
  const [test, setTest] = useState("");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User", user);
        // User is signed in
        setCurrentUser({
          uid: user.uid,
          fullname: test,
          email: user.email,
          image:
            "https://t4.ftcdn.net/jpg/06/00/33/85/360_F_600338598_jpAYwRGNKuPCsRovcMYlfIGmUPdNcyxt.jpg",
          // Add more user details you need here
        });
        setFullName(user.email.slice(0, 5)); // Set fullname here
      } else {
        // User is signed out
        setCurrentUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        fullName,
        setCurrentUser,
        setFullName,
        test,
        setTest,
        userData,
        setUserData,
      }}
    >
      {" "}
      {/* Include setFullName in context value */}
      {children}
    </UserContext.Provider>
  );
};
