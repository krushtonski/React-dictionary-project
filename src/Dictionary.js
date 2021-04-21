import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import Photos from "./Photos";
import Image from "./Images/Reading.png";
import SearchIcon from "./Images/search.png";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  // Storing photos inside a photos state
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  // Requesting the Dictionary API - https://dictionaryapi.dev/
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    // Requesting the Pexels Photo API - https://www.pexels.com/api/documentation/
    let pexelsApiKey =
      "563492ad6f9170000100000120aa0fa984e84b6a874577d839ecff8c";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  // Searching Message
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  // Changing the state
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  // Calling the search when loaded
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <span className="Heading row">
            <img
              src={Image}
              className="Reading d-none d-lg-block"
              alt="Lady reading a book"
            />
            <h1 className="DictionaryHeader text-center">Dictionary</h1>
          </span>
          <h2>What are you looking for?</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search for a word"
              onChange={handleKeywordChange}
              className="Input"
            />
          </form>
          <div className="hint">
            Suggested words: sunset, wine, yoga, forest, plants
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
