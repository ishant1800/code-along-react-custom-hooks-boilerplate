import { useEffect, useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [content, setContent] = useState(() => {
    const storedValue = window.localStorage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(content));
    window.sessionStorage.setItem(key, JSON.stringify(content));
  }, [key, content]);

  return [content, setContent];
}

export default useLocalStorage;