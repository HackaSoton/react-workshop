import { useState } from "react";
import { getCelebrities } from "./celebrities";
import { addAvatars } from "./avatars";

import "./App.css";

const celebrities = addAvatars(getCelebrities());

function App() {
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState(celebrities);

  return (
    <>
      <div id="search-container">
        <input
          onChange={(event) => setSearchString(event.target.value)}
          type="search"
          id="search-bar"
        />
        <button
          onClick={() => search(searchString, setSearchResults)}
          type="button"
          id="search-button"
        >
          Search
        </button>
      </div>
      <div id="search-results-container">
        {searchResults.map((result) => (
          <div className="search-result">
            <img src={result.avatar} className="search-result-image" />
            <span>{result.label}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function search(searchString, setSearchResults) {
  const results = celebrities.filter(
    ({ label }) => label.toLowerCase().indexOf(searchString) !== -1
  );
  setSearchResults(results);
}

export default App;
