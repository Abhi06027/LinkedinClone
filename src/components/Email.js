import React from "react";

export default function Email(props) {
  return (
    <div>
      <div className=" px-4  py-3   ">
        <input className=" btn " type="email" placeholder={props.Email} />
      </div>
    </div>
  );
}
