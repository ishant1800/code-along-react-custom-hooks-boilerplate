import { useState, useEffect } from 'react';

const useStorage = (initialValue) => {
  const getInitialValue = () => {
    const storedValue = localStorage.getItem('InputValue');
    return storedValue !== null ? storedValue : initialValue;
  };

  const [value, setValue] = useState(getInitialValue);

  useEffect(() => {
    localStorage.setItem('InputValue', value);
    sessionStorage.setItem('InputValue', value);
  }, [value]);

  return [value, setValue];
};

export default useStorage;
