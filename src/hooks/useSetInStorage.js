import { useState } from "react";

export default function useSetInStorage(name) {
  const [storage, setStorage] = useState(localStorage.getItem(name));

  const placeInStorage = value => {
    if (!value) {
      localStorage.removeItem(name);
      setStorage();
    } else {
      localStorage.setItem(name, value);
      setStorage(value);
    }
  };

  return [storage, placeInStorage];
}
