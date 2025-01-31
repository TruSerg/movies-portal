import { useEffect, useState } from "react";

const useDebounce = (value: string, delay = 1500) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const debounce = setTimeout(() => setDebounced(value), delay);

    return () => {
      clearTimeout(debounce);
    };
  }, [value, delay]);

  return debounced;
};

export default useDebounce;
