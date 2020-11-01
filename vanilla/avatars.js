const avatars = [
  "/home/pringon/dev/workshops/frontend/vanilla/icons/alek.jpg",
  "/home/pringon/dev/workshops/frontend/vanilla/icons/dan.png",
  "/home/pringon/dev/workshops/frontend/vanilla/icons/nicky.jpg",
  "/home/pringon/dev/workshops/frontend/vanilla/icons/velina.jpg",
];

function addAvatars(labels) {
  return labels.map((label) => {
    const avatarIndex = Math.floor(Math.random() * avatars.length);

    return {
      label,
      avatar: avatars[avatarIndex],
    };
  });
}
