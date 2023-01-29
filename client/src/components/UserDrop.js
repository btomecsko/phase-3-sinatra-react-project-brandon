import React from "react";



const UserDrop = ({name, userid}) => {
  return (
      <option value={userid}>{name}</option>
    
  );
}

export default UserDrop;