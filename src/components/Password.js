import React from "react";

export default function Password(props) {
  return (
    <div className=" px-4  py-3   ">
      <input
        className=" btn    "
        type="password"
        placeholder={props.Password}
      />
    </div>
  );
}
