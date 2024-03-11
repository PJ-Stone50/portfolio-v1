import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("")

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };
  const handleFullName = (event) => {
    event.preventDefault();
    setFullName(event.target.value);
  };

  useEffect(() => {
    console.log("auth:", auth);
    // console.log("userCredential:", userCredential);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,

        email,
        password,
      );
      await setDoc(doc(db, "profile", userCredential.user.uid), {
        image: "",
        fullname: fullName,
        gender: "",
        birthdate: "",
        interests: [],
      });
      console.log("*FullName", fullName)
      navigate('/')
      console.log("Usercredential", userCredential);
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("อีเมล์นี้มีคนใช้แล้ว");
          break;
        case "auth/invalid-email":
          setError("อีเมล์นี้ไม่มีในระบบ");
          break;
        case "auth/weak-password":
          setError("ใช้รหัสยากกว่านี้");
          break;
        default:
          console.log("Error", error);
          setError(error.code);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Register</h3>
        {error && (
          <p className="text-center">
            <p className="text-red-500 text-center">{error}</p>
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="fullname">
                Fullname
              </label>
              <input
                type="fullname"
                placeholder="fullname"
                onChange={handleFullName}
                value={fullName}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                onChange={handleEmail}
                value={email}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                onChange={handlePassword}
                value={password}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                required
              />
            </div>
            <Link
              to="/login"
              className="text-sm text-blue-600 hover:underline"
            >
              Already have an account? Login
            </Link>
            <div className="flex items-baseline justify-between">
              <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
