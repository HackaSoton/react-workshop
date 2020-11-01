const celebrities = addAvatars(getCelebrities());

function search() {
  const searchBar = document.querySelector("#search-bar");
  const searchString = searchBar.value.toLowerCase();
  console.log(searchString);

  const searchResult = celebrities.filter(
    ({ label }) => label.toLowerCase().indexOf(searchString) !== -1
  );
  showResults(searchResult);
}

function showResults(results) {
  const fragment = document.createDocumentFragment();

  for (const result of results) {
    const card = document.createElement("div");
    card.classList.add("search-result");

    const avatar = document.createElement("img");
    avatar.classList.add("search-result-image");
    avatar.src = result.avatar;
    card.appendChild(avatar);

    const label = document.createElement("span");
    label.textContent = result.label;
    card.appendChild(label);

    fragment.appendChild(card);
  }

  const container = document.querySelector("#search-results-container");
  container.innerHTML = "";
  container.append(fragment);
}

showResults(celebrities);
