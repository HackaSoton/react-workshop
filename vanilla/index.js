const celebrities = addAvatars(getCelebrities())

function search() {
  const searchBar = document.getElementById("search-bar")
  const searchString = searchBar.value.trim().toLowerCase()

  const searchResults = celebrities.filter(
    (celebrity) => celebrity.label.toLowerCase().indexOf(searchString) !== -1
  )

  showResults(searchResults)
}

function showResults(results) {
  const fragment = document.createDocumentFragment()

  for (const result of results) {
    const card = document.createElement("div")
    card.classList.add("search-result")

    const avatar = document.createElement("img")
    avatar.classList.add("search-result-avatar")
    avatar.src = result.avatar
    card.appendChild(avatar)

    const label = document.createElement("p")
    label.textContent = result.label
    card.appendChild(label)

    fragment.appendChild(card)
  }

  const container = document.getElementById("search-results-container")
  container.innerHTML = ""
  container.appendChild(fragment)
}

showResults(celebrities)