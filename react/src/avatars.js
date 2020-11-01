const avatars = [
  "icons/alek.jpg",
  "icons/dan.png",
  "icons/nicky.jpg",
  "icons/velina.jpg",
];

export function addAvatars(labels) {
  return labels.map((label) => {
    const avatarIndex = Math.floor(Math.random() * avatars.length);

    return {
      label,
      avatar: avatars[avatarIndex],
    };
  });
}
