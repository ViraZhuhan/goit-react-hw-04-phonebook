import { useState, useEffect } from 'react';

export function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}