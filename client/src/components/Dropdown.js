import React from "react";



const Dropdown = ({name, pokeid}) => {
  return (
      <option id={pokeid}>{name}</option>
    
  );
}

export default Dropdown;