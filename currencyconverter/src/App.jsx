import { useState } from "react";
import InputBox from "../components/InputBox";
import useCurrencyInfo from "../hooks/UseCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const { data: currencyInfo, error } = useCurrencyInfo(from); // Destructure data and error

  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      const conversionRate = currencyInfo[to];
      setConvertedAmount((amount * conversionRate).toFixed(2)); // Perform conversion
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/05/48/87/94/360_F_548879452_UENBiNLnYvk33fh5JaNneKsLUetNKv8c.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
        height: "100vh",
        width: "100%",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "white", fontSize: "32px", marginBottom: "24px" }}>
        Currency Converter
      </h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <InputBox
          label="From"
          placeholder="Enter amount"
          currencyOptions={options}
          value={amount}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectedCurrency={from}
          onAmountChange={(amount) => setAmount(amount)}
        />
        <button
          type="button"
          onClick={swap}
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Swap
        </button>
        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectedCurrency={to}
        />
        <div style={{ justifyContent: "space-between", width: "100%" }}>
          <button
            type="button"
            onClick={convert} // Add conversion logic here
            style={{
              padding: "8px 16px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
