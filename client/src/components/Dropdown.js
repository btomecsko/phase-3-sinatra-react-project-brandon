import React from "react";



const Dropdown = ({name, pokeid}) => {
  return (
      <option value={pokeid}>{name}</option>
    
  );
}

export default Dropdown;