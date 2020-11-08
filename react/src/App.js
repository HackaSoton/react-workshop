import { useState } from "react";
import { getCelebrities } from "./celebrities";
import { addAvatars } from "./avatars";

import "./App.css";

const celebrities = addAvatars(getCelebrities());

function App() {
  const [searchString, setSearchString] = useState("");

  return (
    <>
      <div id="search-container">
        <input
          onChange={(event) => setSearchString(event.target.value)}
          type="search"
          id="search-bar"
        />
      </div>
      <div id="search-results-container">
        {search(searchString).map((result) => (
          <div className="search-result">
            <img
              src={result.avatar}
              alt={`Headshot of ${result.label}`}
              className="search-result-image"
            />
            <span>{result.label}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function search(searchString) {
  const stringToFind = searchString.toLowerCase().trim();

  return celebrities.filter(
    ({ label }) => label.toLowerCase().indexOf(stringToFind) !== -1
  );
}

export default App;
