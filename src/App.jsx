import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import About from "./component/About";
import AboutDescription1 from "./component/AboutDescription1";
import AboutDescription2 from "./component/AboutDescription2";
import Portfolio from "./component/Portfolio";
import Resume from "./component/Resume";
import Contact from "./component/Contact";
import WorkspaceContact from "./component/WorkspaceContact";
import Footer from "./component/Footer";
import Comment from "./component/Comment";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Require User login
    onAuthStateChanged(auth, (user) => {
      // console.log("User", user);
      if (user) {
        console.log("Found User", user);
        // ...
      } else {
        navigate("/login");
      }
    });
  }, []);

  // Scroll to the top of website when refreshing

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <AboutDescription1 />
      <AboutDescription2 />
      <Portfolio />
      <Resume />
      <Contact />
      {/*  */}
      {/* <WorkspaceContact /> */}
      <Comment />
      <Footer />
    </>
  );
}

export default App;
