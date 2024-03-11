"use client";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { Alert } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [user, setUser] = useState([]);

  const [userId, setUserUid] = useState("");

  // const userIsInactive = useFakeInactiveUser();
  const navigate = useNavigate();

  // const loader = async () => {
  //   const user = await getUser();
  //   if (!user) {
  //     return redirect("/profile");
  //   }
  //   return null;
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setIsSuccess(true);
      if (userCredential.user) {
        // redirect to Profile
        setUser(userCredential.user.email);
        navigate("/profile");
      }

      console.log("Usercredential", userCredential);
      router.push("/profile");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          setError("กรุณากรอกอีเมล์หรือรหัสผ่านให้ถูกต้อง");
          break;
        case "auth/invalid-email":
          setError("อีเมล์นี้ไม่มีในระบบ");
          break;
        default:
          console.log("Error", error);
          setError(error.code);
      }
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        navigate("/profile");
        setUserUid(user.uid); // This updates the userId state
        console.log("User UID:", user.uid); // Log the user's UID
        console.log("User Data:", user.email); // Log the entire user object

        // If you need to use userId state here immediately after setting it,
        // it's best to use the value directly from the user object.
        // Note: Any code here that depends on the updated state of `userId`
        // will not see the updated value until the next render.
      } else {
        // User is signed out
        // Handle sign out
      }
    });

    // Return a function from useEffect to unsubscribe from the listener
    // when the component unmounts, preventing memory leaks.
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Login</h3>
        {error && (
          <p className="text-center">
            <p className="text-red-500 text-center">{error}</p>
          </p>
        )}

        {isSuccess && (
          <Alert color="success" onDismiss={() => alert("Alert dismissed!")}>
            <span className="font-medium">Info alert!</span> Login success
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block">Password</label>
            <input
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              required
            />
          </div>
          <div className="flex flex-col gap-2 items-center justify-between ">
            <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
              Login
            </button>
            <Link
              to="/register"
              className="text-sm text-blue-600 hover:underline"
            >
              Don't have an account? Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
