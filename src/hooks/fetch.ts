import { useEffect, useState } from 'react';
import { useInterval } from './interval';

export function useFetch<T>(url: string, refreshDelay = 0) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T>();
  const interval = useInterval(refreshDelay);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((e) => e.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, [url, interval]);

  return { data, loading };
}
