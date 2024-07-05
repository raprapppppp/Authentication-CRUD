import React from "react";
import Admin from "./Admin";

const LoginPage = () => {
  return (
    <div className="bg-background h-[100vh] text-txtColor ">
      <div className="container mx-auto">
        <div className="h-[100vh] flex flex-col justify-center items-center gap-7">
          <div className="text-5xl flex flex-col justify-center items-center gap-2 font-bold py-5">
            <h1>WELCOME</h1>
          </div>
          <Admin />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
