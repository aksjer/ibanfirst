import { useEffect, useState } from 'react';

export function useInterval(delay = 5000) {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    let id: NodeJS.Timeout;
    if (delay) {
      id = setInterval(() => setTime(Date.now()), delay);
    }
    return () => {
      if (delay) {
        clearInterval(id);
      }
    };
  }, [time, delay]);

  return time;
}
