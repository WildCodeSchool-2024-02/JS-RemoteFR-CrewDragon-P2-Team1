import { useState } from "react";

function ManageLikes() {
  const [likeDestination, setLikeDestination] = useState(new Map());

  const addOrRemoveDestination = (destination) => {
    const newMap = new Map(likeDestination);
    // if key already exists in map, then remove it
    if (likeDestination.has(destination.ID)) {
      newMap.delete(destination.ID);
    }
    // if key doesn't exist, add it
    else {
      newMap.set(destination.ID, destination);
    }
    setLikeDestination(newMap);
  };

  return { likeDestination, addOrRemoveDestination };
}

export default ManageLikes;
