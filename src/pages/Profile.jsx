import { useNavigate } from "react-router-dom";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { useEffect, useState } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { MdClose } from "react-icons/md";

import { useUser } from "../contexts/UserContext";


function Profile() {
  const { currentUser, test, setTest, userData, setUserData } = useUser();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [userUid, setUserUid] = useState("");
  const [userImage, setUserImage] = useState(
    "https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png"
  );

  const [formData, setFormData] = useState({
    image: "",
    fullname: "",
    gender: "",
    birthdate: "",
    interests: [],
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      uploadImage(file)
        .then((imageUrl) => {
          setFormData({ ...formData, image: imageUrl });
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    }
  };

  const uploadImage = async (file) => {
    const storageRef = ref(storage, "YOUR_STORAGE_REF/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    try {
      const snapshot = await getUploadTaskSnapshot(uploadTask);
      const imageUrl = await getDownloadURL(snapshot.ref);
      return imageUrl;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  const fetchUser = async (userUid) => {
    const docRef = doc(db, "profile", userUid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setFormData(docSnap.data());
    }
  };

  useEffect(() => {
    if (userUid) {
      fetchUser(userUid);
    }
  }, [userUid]);
  useEffect(() => {
    console.log("TEST", test)
  }, [test]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // setFormData([...formData.fullname("Default Name")])
    setDoc(doc(db, "profile", userUid), formData);

    // Update fullname in context
    setTest(formData.fullname)
    setUserData(formData)
    // console.log("TEST", test)
    // setFullName(formData.fullname);
    // console.log("fullName", formData.fullname);
    navigate('/')
  };




  const handleCheckBox = (event) => {
    console.log(event.target.checked);
    console.log(event.target.value);
    if (event.target.checked) {
      setFormData({
        ...formData,
        interests: [...formData.interests, event.target.value],
      });
    } else {
      setFormData({
        ...formData,
        interests: formData.interests.filter(
          (interest) => interest !== event.target.value
        ),
      });
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("Sign-out successful");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("Error", error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log("User", user);
      if (user) {
        setIsLogin(true);
        setUserUid(user.uid);
        // setEmail()
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
        setIsLogin(false);
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      {isLogin ? (
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg max-w-lg w-full">
          <form onSubmit={handleSubmit} className="relative">
            <div className="absolute right-[-15px] top-[-10px] p-3  items-center">
              <MdClose
                onClick={() => navigate("/")}
                className="cursor-pointer"
              />
            </div>
            {/* <div className="userImgContainer flex items-center justify-center">
              <img src={userImage} alt="userImg" width={150} />
            </div> */}
            <h3 className="text-2xl font-bold text-center mb-4">Profile</h3>
            <div className="mt-4">
              <label className="block">Full Name</label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, fullname: e.target.value })
                }
                value={formData.fullname}
                type="text"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"

              />
            </div>
            <div className="mt-4">
              <label className="block">Gender</label>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                  />{" "}
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                  />{" "}
                  Female
                </label>
              </div>
            </div>
            <div className="mt-4">
              <label className="block">Birthdate</label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, birthdate: e.target.value })
                }
                value={formData.birthdate}
                type="date"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"

              />
            </div>
            <div className="mt-4">
              <label className="block">Interests</label>
              <div className="flex flex-wrap gap-4">
                <label>
                  <input
                    type="checkbox"
                    value="Reading"
                    checked={formData.interests.includes("Reading")}
                    onChange={handleCheckBox}
                  />
                  Reading
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Traveling"
                    checked={formData.interests.includes("Traveling")}
                    onChange={handleCheckBox}
                  />
                  Traveling
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Gaming"
                    checked={formData.interests.includes("Gaming")}
                    onChange={handleCheckBox}
                  />
                  Gaming
                </label>
                {/* Add more interests as needed */}
              </div>
            </div>

            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Update Profile
              </button>
              <button
                type="button"
                className="px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-700"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>Please login</div>
      )}
    </div>
  );
}

export default Profile;
