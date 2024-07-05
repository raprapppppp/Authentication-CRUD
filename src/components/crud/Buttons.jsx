import React from "react";

const Buttons = ({ name, handleShow }) => {
  return (
    <div>
      <button
        className="bg-accent py-3 px-5 rounded-md text-white font-semibold outline-black-1"
        onClick={handleShow}
      >
        {name}
      </button>
    </div>
  );
};

export default Buttons;
