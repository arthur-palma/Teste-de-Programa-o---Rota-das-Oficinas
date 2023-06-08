import React, { useState } from "react";

export function NumberConverter() {
  const [number, setNumber] = useState("");
  const [romanNumeral, setRomanNumeral] = useState("");
  const [romanNumeralResponse, setRomanNumeralResponse] = useState("");
  const [decimalNumber, setDecimalNumber] = useState("");

  const romanNumeralsMap = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  function convertToRoman() {
    let num = parseInt(number);
    if (isNaN(num) || num <= 0 || num > 3999) {
      setRomanNumeralResponse("Número inválido.");
      return;
    }

    let result = "";
    for (let i = 0; i < romanNumeralsMap.length; i++) {
      while (num >= romanNumeralsMap[i].value) {
        result += romanNumeralsMap[i].symbol;
        num -= romanNumeralsMap[i].value;
      }
    }

    setRomanNumeralResponse(result);
  }

  function convertToNumeral() {
    let romanNum = romanNumeral.toUpperCase();
    if (!validateRomanNumeral(romanNum)) {
      setDecimalNumber("Número romano inválido.");
      return;
    }

    let result = 0;
    let i = 0;

    while (i < romanNum.length) {
      let currentSymbol = romanNum[i];
      let currentValue = getRomanNumeralValue(currentSymbol);
      let nextSymbol = romanNum[i + 1];
      let nextValue = getRomanNumeralValue(nextSymbol);

      if (nextValue && currentValue < nextValue) {
        result += nextValue - currentValue;
        i += 2;
      } else {
        result += currentValue;
        i++;
      }
    }

    setDecimalNumber(result);
  }

  function getRomanNumeralValue(symbol) {
    for (let i = 0; i < romanNumeralsMap.length; i++) {
      if (romanNumeralsMap[i].symbol === symbol) {
        return romanNumeralsMap[i].value;
      }
    }
    return 0;
  }

  function validateRomanNumeral(romanNum) {
    const invalidPatterns = [
      "IIII",
      "VV",
      "XXXX",
      "LL",
      "CCCC",
      "DD",
      "MMMM",
      "CDCD",
      "CMCM",
      "XCXC",
      "XLXL",
      "IXIX",
      "IVIV",
    ];

    for (let pattern of invalidPatterns) {
      if (romanNum.includes(pattern)) {
        return false;
      }
    }

    return true;
  }

  return (
    <div className="game-container">
      <h1>Exercicio 1</h1>
      <h2>Conversor de Numeros Romanos</h2>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Digite um número inteiro"
        />
        <button onClick={convertToRoman}>Converter para Romano</button>
        <p>{romanNumeralResponse}</p>
      </div>

      <div>
        <input
          type="text"
          value={romanNumeral}
          onChange={(e) => setRomanNumeral(e.target.value)}
          placeholder="Digite um número romano"
        />
        <button onClick={convertToNumeral}>Converter para Decimal</button>
        <p>{decimalNumber}</p>
      </div>
    </div>
  );
}
