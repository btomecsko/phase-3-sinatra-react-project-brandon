import React, { useState } from "react";

import Form from 'react-bootstrap/Form';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <Form className="d-flex">
        <Form.Control className="prompt" value={searchTerm} onChange={handleChange} placeholder="Search for Pokemon" />
        <i className="search icon" />
      </Form> 
  );
}

export default Search;