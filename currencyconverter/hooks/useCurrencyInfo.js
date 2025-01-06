import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    // A flag to prevent state update after unmounting
    let isMounted = true;

    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(
          `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_BoMpzN2R80eudRutyN5EAaYBSwEnLZLWDPhrsFoq&base_currency=${baseCurrency}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch currency data");
        }
        const result = await response.json();

        // Check the structure of the response
        if (result && result.data) {
          if (isMounted) {
            setData(result.data); // Assuming 'data' is the correct field
          }
        } else {
          throw new Error("Invalid data structure from API");
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
        console.error(err);
      }
    };

    fetchCurrencyData();

    // Cleanup to avoid state update if the component is unmounted
    return () => {
      isMounted = false;
    };
  }, [baseCurrency]); // Trigger the effect only when baseCurrency changes

  return { data, error };
}

export default useCurrencyInfo;
