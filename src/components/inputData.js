import React from "react";

function InputData(props) {
  return (
    <>
      <div className="data">
        <b>{props.name}</b>
        <input
      id="exampleAddress"
      name="address"
      placeholder={props.place}
    />
      </div>
    </>
  );
}

export default InputData;
