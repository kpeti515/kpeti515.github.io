import { useEffect, useState } from 'react';
import { Repository } from '../interfaces/Repository';

export const useFetchGithubInfo = (url: string, loading: Function) => {
  const authToken = process.env.REACT_APP_GH_API_KEY ? `token ${process.env.REACT_APP_GH_API_KEY}` : '';
  const [response, setResponse] = useState<Repository | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      loading(true);
      try {
        const res = await fetch(url, {
          method: 'GET',
          headers: { Authorization: authToken },
          signal,
        });
        const json = await res.json();

        setResponse(json);
      } catch (error: any) {
        setError(error);
      } finally {
        loading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [authToken, loading, url]);

  return { response, error };
};
