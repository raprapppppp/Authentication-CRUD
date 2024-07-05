import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { auth } from "../../FIrebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      navigate("/");
      console.log("LOG IN SUCCEFULLY");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <form
        action=""
        className="flex justify-center flex-col gap-5 w-[300px] border-2 border-accent rounded-md p-5 drop-shadow-md"
      >
        <h1 className="text-2xl font-bold text-center">Admin</h1>

        <div className="flex flex-col gap-1">
          <p>Username</p>
          <input
            type="text"
            placeholder="email"
            className="py-1 px-2 rounded-sm text-txtColor/"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p>Password</p>
          <input
            type="password"
            placeholder="password"
            className="py-1 px-2 rounded-sm text-txtColor/"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <button
          className="bg-accent text-txtColor font-semibold text-xl py-2 px-3 rounded-md dr"
          onClick={handleLogIn}
        >
          Log in
        </button>
        <p className="text-center">or</p>

        <div className="flex items-start justify-center gap-2">
          <div className="border-2 border-accent size-[30px] rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-all ease-in duration-200">
            <FaGoogle className="text-xl " />
          </div>
          <div className="border-2 border-accent size-[30px] rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-all ease-in duration-200">
            <FaFacebookF className="text-xl " />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Admin;
