import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    //Get local from storage key
    const item = window.localStorage.getItem(key);
    //Parse and return stored JSON or, if undefined, return initialValue
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    //Save state
    setStoredValue(value);
    //Save to local storage
    window.localStorage.setItem(key, JSON.stringify);
  };
  //Now, return 'storedValue' from this hook in an array, and setValue
  return [storedValue, setValue];
};
