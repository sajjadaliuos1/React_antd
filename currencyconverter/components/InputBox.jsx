import React, { useId } from "react";
import { Input, Select } from "antd";

export default function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = ['usd','inr'],
  selectedCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  classname = "",
  placeholder = "Enter currency value",
}) {
  console.log(currencyOptions)
  const amountInputId = useId();

  return (
    <div
      style={{
        marginBottom: "16px",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
      }}
      className={classname}
    >
      {label && (
        <label
          htmlFor={amountInputId}
          style={{
            fontWeight: "bold",
            marginBottom: "8px",
            display: "block",
            marginRight: "8px",
          }}
        >
          {label}
        </label>
      )}
      <Input
        id={amountInputId}
        style={{
          flex: "1",
          padding: "8px",
          fontSize: "16px",
          border: "1px solid #d9d9d9",
          borderRadius: "4px",
          marginRight: "8px",
        }}
        placeholder={placeholder}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        value={amount}
        disabled={amountDisable}
      />
      <Select
        style={{ width: "120px" }}
        value={selectedCurrency}
        onChange={(value) => onCurrencyChange && onCurrencyChange(value)}
        disabled={currencyDisable}
        placeholder="Currency"
      >
        {currencyOptions.map((currency) => (
          <Select.Option key={currency} value={currency}>
            {currency}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
}
