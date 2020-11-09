const avatars = [
  "/home/pringon/dev/workshops/frontend-live/icons/alek.jpg",
  "/home/pringon/dev/workshops/frontend-live/icons/dan.png",
  "/home/pringon/dev/workshops/frontend-live/icons/nicky.jpg",
  "/home/pringon/dev/workshops/frontend-live/icons/velina.jpg",
]

function addAvatars(labels) {
  const cards = []

  for (const label of labels) {
    const avatarIndex = Math.floor(Math.random() * avatars.length)

    cards.push({
      label,
      avatar: avatars[avatarIndex]
    })
  }

  return cards
}