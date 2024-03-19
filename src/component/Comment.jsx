import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { doc, addDoc, getDoc, getDocs, collection } from "firebase/firestore";
import { useUser } from "../contexts/UserContext";
import { onAuthStateChanged } from "firebase/auth";
// Framer-motion
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

export const textAnimate = {
  offscreen: { y: 15, opacity: 0 },
  onscreen: { y: 0, opacity: 1 },
  transition: { type: "spring", bounce: 0.4, duration: 3 },
};

const Comment = () => {
  const isMobile = useMediaQuery({ query: "(min-width: 780px)" });

  const { currentUser, fullname, test, setTest, userData } = useUser();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [userUid, setUserUid] = useState("");
  const [formData, setFormData] = useState({
    image: "",
    fullname: "",
    gender: "",
    birthdate: "",
    interests: [],
  });
  const navigate = useNavigate();

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
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserUid(user.uid);
        const uid = user.uid;
      } else {
        console.warn("Not found user");
      }
    });
  }, []);

  const fetchComments = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "comments"));
      const commentsData = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          text: doc.data().text,
          fullname: doc.data().fullname,
        }; // Extracting only the text field
      });
      setComments(commentsData);
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  };

  useEffect(() => {
    fetchComments();
    // console.log("userData", userData);
  }, [newComment]);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = async () => {
    try {
      // Wait for the auth state to change and check if a user is logged in
      onAuthStateChanged(auth, async (user) => {
        // Make the callback async
        if (user) {
          // Add the new comment to Firestore
          await addDoc(collection(db, "comments"), {
            text: newComment,
            fullname: formData.fullname,
            user: {
              // Replace these placeholders with actual user data
              name: "John Doe",
              image: "https://example.com/avatar.jpg",
            },
          });

          // Clear the input field after submitting the comment
          setNewComment("");

          // If more actions are needed after setting the comment,
          // make sure to include them here or outside this callback,
          // depending on the desired behavior.
        } else {
          // If no user, navigate to login
          navigate("/login");
          return;
        }
      });
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 0.5 }}
      className=" p-5"
    >
      <div className="w-full topic flex  items-center ">
        <span className="w-full bg-black h-[4px] mx-5 "></span>
        <motion.h1
          transition={{ duration: 1 }}
          variants={textAnimate}
          className={
            isMobile
              ? "text-[32px] font-bold mt-[-8px] mr-5"
              : "text-[24px] font-bold mt-[-8px] mr-5"
          }
        >
          COMMENT
        </motion.h1>
      </div>

      <motion.div
        transition={{ duration: 1 }}
        variants={textAnimate}
        className="mt-4 p-3 rounded-lg border mb-3 "
      >
        {comments.map((comment) => (
          <div key={comment.id} className="w-full mb-4 flex items-start">
            <div className="w-full">
              <div className="w-full ">
                <div className="flex gap-2 items-center">
                  <img
                    className="rounded-full w-[30px] h-[30px]"
                    src="https://media.istockphoto.com/id/1131164548/vector/avatar-5.jpg?s=612x612&w=0&k=20&c=CK49ShLJwDxE4kiroCR42kimTuuhvuo2FH5y_6aSgEo="
                    alt="defaultImg"
                  />
                  <p className="font-semibold">{comment.fullname}</p>
                </div>
                <p className="text-overflow-hidden">{comment.text}</p>
              </div>
              <hr className="w-full bg-black text-black" />
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        transition={{ duration: 1 }}
        variants={textAnimate}
        className="mb-4"
      >
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md"
          rows="4"
          placeholder="Write your comment here..."
          value={newComment}
          onChange={handleCommentChange}
        ></textarea>
      </motion.div>
      <div>
        <motion.button
          transition={{ duration: 1 }}
          variants={textAnimate}
          className="px-4 py-2 bg-black text-white rounded-md"
          onClick={handleCommentSubmit}
        >
          Add Comment
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Comment;
