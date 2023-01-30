import React from "react";

const StarterDrop = ({ name, starid }) => {
  return (
    <option value={starid}>{name}</option>
  );
}

export default StarterDrop;