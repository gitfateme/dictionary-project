import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(r) {
    setResults(r.data[0]);
  }

  function handlePexelsResponse(r) {
    setPhotos(r.data.photos);
  }

  function search(e) {
    e.preventDefault();

    //documentaion:   https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    e.target[0].value = "";

    let pexelsApiKey =
      "563492ad6f9170000100000186b62cdc32da4b48ac12d6df09ecc314";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    axios
      .get(pexelsApiUrl, {
        headers: {
          Authorization: `Bearer ${pexelsApiKey}`,
        },
      })
      .then(handlePexelsResponse);
  }

  function handleKeywordChange(e) {
    setKeyword(e.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h2>What word do you want to look up?</h2>
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
        <div className="hint">Suggested words: Cat, Gym, Crow</div>
      </section>

      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
