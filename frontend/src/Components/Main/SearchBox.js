import "./SearchBox.scss";
import React, { useState } from "react";

export default function Search() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        onChange={handleInputChange}
        className="search__input"
        name="searchInput"
        value={input}
        placeholder="search..."
      ></input>
    </div>
  );
}
