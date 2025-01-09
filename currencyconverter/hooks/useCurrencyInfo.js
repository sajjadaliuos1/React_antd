import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(
          `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_BoMpzN2R80eudRutyN5EAaYBSwEnLZLWDPhrsFoq&base_currency=${baseCurrency}`
        );

        console.log("Raw Response:", response);

        if (!response.ok) {
          throw new Error(`Failed to fetch currency data: ${response.status}`);
        }

        const result = await response.json();

        console.log("Parsed Response:", result);

        if (result && result.data) {
          console.log("Currency Data:", result.data);
          if (isMounted) {
            setData(result.data);
          }
        } else {
          throw new Error("Invalid data structure from API");
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
        console.error("Error:", err);
      }
    };

    fetchCurrencyData();

    return () => {
      isMounted = false;
    };
  }, [baseCurrency]);

  return { data, error };
}

export default useCurrencyInfo;
