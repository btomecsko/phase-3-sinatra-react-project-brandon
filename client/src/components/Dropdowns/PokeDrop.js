import React from "react";

const PokeDrop = ({ name, pokeid }) => {
  return (
    <option value={pokeid}>{name}</option>
  );
}

export default PokeDrop;