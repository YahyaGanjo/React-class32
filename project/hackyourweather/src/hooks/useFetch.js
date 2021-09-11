import { useState } from "react";

const useFetch = (url, applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("API call failed");
      }
      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "something went wrong");
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useFetch;
