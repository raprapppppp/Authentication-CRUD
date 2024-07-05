import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../FIrebaseConfig";

const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      console.log("Log Out Success Fully");
    })
    .catch((error) => {
      console.log("Log Out Failed Fully");
    });
};

const Header = () => {
  return (
    <div className="bg-background py-5 drop-shadow-md w-full">
      <div className="container flex justify-between items-center ">
        <h1 className="text-3xl font-bold">CRUD</h1>
        <button
          onClick={handleSignOut}
          className="text-xl border-1 border-accent bg-accent py-1 px-3 rounded-md "
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
