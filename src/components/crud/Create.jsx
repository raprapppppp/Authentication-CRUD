import React, { useState, useEffect, useContext } from "react";
import { db } from "../../FIrebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import Buttons from "./Buttons";

const Create = () => {
  const [show, setShow] = useState(false);
  const [newMembers, setNewMembers] = useState({
    firstname: "",
    lastname: "",
    address: "",
    age: 0,
    job: "",
    salary: 0,
  });

  //DATABASE COLLECTION REFERENCE
  const memberCollection = collection(db, "members");

  //HIDE SHOW ADD FORM
  const handleShow = () => {
    setShow(!show);
  };

  //SUBMIT BUTTON FUNCTION
  const handleSubmit = async () => {
    try {
      await addDoc(memberCollection, newMembers);
      setNewMembers({
        firstname: "",
        lastname: "",
        address: "",
        age: 0,
        job: "",
        salary: 0,
      });

      console.log("Succesfully addedd");
    } catch (error) {
      console.log("Failed");
    }
  };

  return (
    <div className="">
      <div className="container flex flex-col justify-start items-center size-full py-10 gap-5">
        {show && (
          <div className="size-full flex flex-col items-center gap-5">
            <form className="grid grid-cols-1 sm:grid-cols-2 items-center gap-5">
              <div className="flex flex-col gap-1">
                <p>Firstname</p>
                <input
                  type="text"
                  className="border-2 border-black rounded-md py-1 px-3 outline-accent text-black/70"
                  onChange={(e) =>
                    setNewMembers({ ...newMembers, firstname: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-1">
                <p>Lastname</p>
                <input
                  type="text"
                  className="border-2 border-black rounded-md py-1 px-3 outline-accent text-black/70"
                  onChange={(e) =>
                    setNewMembers({ ...newMembers, lastname: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-1">
                <p>Address</p>
                <input
                  type="text"
                  className="border-2 border-black rounded-md py-1 px-3 outline-accent text-black/70"
                  onChange={(e) =>
                    setNewMembers({ ...newMembers, address: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-1">
                <p>Age</p>
                <input
                  type="number"
                  className="border-2 border-black rounded-md py-1 px-3 outline-accent text-black/70"
                  onChange={(e) =>
                    setNewMembers({ ...newMembers, age: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-1">
                <p>Job</p>
                <input
                  type="text"
                  className="border-2 border-black rounded-md py-1 px-3 outline-accent text-black/70"
                  onChange={(e) =>
                    setNewMembers({ ...newMembers, job: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-1">
                <p>Salary</p>
                <input
                  type="number"
                  className="border-2 border-black rounded-md py-1 px-3 outline-accent text-black/70"
                  onChange={(e) =>
                    setNewMembers({ ...newMembers, salary: e.target.value })
                  }
                />
              </div>
            </form>
            <button
              className="bg-red-600 py-3 px-5 rounded-md text-white font-semibold"
              onClick={handleSubmit}
            >
              Add member
            </button>
          </div>
        )}
        <Buttons
          name={show ? "Close" : "Add Members"}
          handleShow={handleShow}
        />
      </div>
    </div>
  );
};

export default Create;
