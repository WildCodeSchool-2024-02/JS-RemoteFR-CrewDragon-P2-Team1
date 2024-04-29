import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  // getting stored value
  if (typeof window !== "undefined") {
    const savedMap = localStorage.getItem(key);
    // early return if savedMap null
    if (savedMap === null) {
      return defaultValue;
    }

    return new Map(JSON.parse(savedMap));
  }

  return defaultValue;
}

const useLocalStorage = (key, defaultValue) => {
  const [values, setValues] = useState(() =>
    getStorageValue(key, defaultValue)
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(Array.from(values.entries())));
  }, [values]);

  return [values, setValues];
};

export default useLocalStorage;
