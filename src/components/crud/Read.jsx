import React, { useEffect, useState } from "react";
import {
  doc,
  updateDoc,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../FIrebaseConfig";
import InputUpdate from "./InputUpdate";

const Read = () => {
  const [getData, setGetData] = useState([]);
  const [updated, setUpdated] = useState(null);

  const memberCollection = collection(db, "members");

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(memberCollection);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGetData((prevData) => data);
    };
    fetchData();
  }, [getData]);

  const handleUpdate = async () => {
    const itemDoc = doc(memberCollection, updated.id);
    await updateDoc(itemDoc, {
      firstname: updated.firstname,
      lastname: updated.lastname,
      address: updated.address,
      age: updated.age,
      job: updated.job,
      salary: updated.salary,
    });
    setUpdated(null);
  };

  const handleDelete = async (id) => {
    const itemDoc = doc(memberCollection, id);
    await deleteDoc(itemDoc);
  };

  return (
    <div className="w-full container mx-auto pb-5">
      <h1 className="text-2xl font-semibold pb-4">List of Members</h1>
      <div className="border flex flex-col gap-3 p-2">
        {getData.map((data) => {
          return (
            <div
              key={data.id}
              className="w-full flex items-center justify-between border"
            >
              {updated && updated.id === data.id ? (
                <div className="absolute w-full h-[100vh] top-0 left-0 right-0 flex flex-col bg-black/50 backdrop-blur-md">
                  <form
                    action=""
                    className="container grid grid-cols-2 place-items-center place-content-center h-full text-accent gap-2"
                  >
                    <InputUpdate
                      onChange={(e) =>
                        setUpdated({ ...updated, firstname: e.target.value })
                      }
                      value={updated.firstname}
                    >
                      Firstname
                    </InputUpdate>
                    <InputUpdate
                      onChange={(e) =>
                        setUpdated({ ...updated, lastname: e.target.value })
                      }
                      value={updated.lastname}
                    >
                      Lastname
                    </InputUpdate>
                    <InputUpdate
                      onChange={(e) =>
                        setUpdated({ ...updated, address: e.target.value })
                      }
                      value={updated.address}
                    >
                      Address
                    </InputUpdate>
                    <InputUpdate
                      onChange={(e) =>
                        setUpdated({ ...updated, age: e.target.value })
                      }
                      value={updated.age}
                    >
                      Age
                    </InputUpdate>
                    <InputUpdate
                      onChange={(e) =>
                        setUpdated({ ...updated, job: e.target.value })
                      }
                      value={updated.job}
                    >
                      Job
                    </InputUpdate>
                    <InputUpdate
                      onChange={(e) =>
                        setUpdated({ ...updated, salary: e.target.value })
                      }
                      value={updated.salary}
                    >
                      Salary
                    </InputUpdate>
                  </form>
                  <div className=" container size-full flex flex-col justify-start items-center gap-4">
                    <button
                      onClick={() => handleUpdate(updated)}
                      className="border-2 py-2 px-5 rounded-md bg-accent text-white border-white w-[150px]"
                    >
                      Done
                    </button>
                    <button
                      onClick={(e) => setUpdated(null)}
                      className="border-2 py-2 px-5 rounded-md bg-accent text-white border-white w-[150px]"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                //TO DISPLAY DATA IN TABLE
                <div className="w-full flex flex-col sm:flex-row items-center justify-between border">
                  <div className="grid grid-cols-6 place-items-center w-full text-center text-[12px] sm:text-xl">
                    <p>{data.firstname}</p>
                    <p>{data.lastname}</p>
                    <p>{data.address}</p>
                    <p>{data.age}</p>
                    <p>{data.job}</p>
                    <p>{data.salary}</p>
                  </div>
                  <div className="flex flex-row sm:flex-col gap-2 px-2 py-1">
                    <button
                      className="bg-green-500 w-full rounded-sm font-semibold text-white py-1 px-5"
                      onClick={(e) => setUpdated(data)}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(data.id)}
                      className="bg-red-500 w-full rounded-sm font-semibold text-white py-1 px-5"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Read;
