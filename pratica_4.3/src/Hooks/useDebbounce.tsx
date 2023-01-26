import { useEffect, useState } from "react";

function useDebbounce<T>(value: T, delay?: number): T {
  const [debbounceValue, setDebbounceValue] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebbounceValue(value), delay || 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debbounceValue;
}
export default useDebbounce;
