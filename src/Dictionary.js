import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  // Searching Message
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);

    // Use of dictionary API
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  // Changing the state
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  // Input of the keyword
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
