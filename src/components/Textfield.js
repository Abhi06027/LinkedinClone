import React from "react";

export default function textfield(props) {
  return (
    <div>
      <div className=" px-4  py-3   ">
        <input className=" btn " type="name" placeholder={props.Name} />
      </div>
    </div>
  );
}
