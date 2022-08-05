import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(e) {
    e.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function handleKeywordChange(e) {
    setKeyword(e.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
