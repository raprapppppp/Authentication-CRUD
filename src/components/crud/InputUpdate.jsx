import React, { Children } from "react";

const InputUpdate = ({ children, onChange, value }) => {
  return (
    <div className="flex flex-col gap-1">
      <p>{children}</p>
      <input
        onChange={onChange}
        value={value}
        type="text"
        className="rounded-sm px-2 py-1 text-black"
      />
    </div>
  );
};

export default InputUpdate;
