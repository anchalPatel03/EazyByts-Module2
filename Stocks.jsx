import { useState, useEffect } from "react";
import StockTable from "../components/StockTable";

const Stocks = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // Simulated stock data (replace with API call later)
    setStocks([
      { symbol: "AAPL", company: "Apple Inc.", price: 178.44, change: 1.2 },
      { symbol: "GOOGL", company: "Alphabet Inc.", price: 2840.67, change: -0.8 },
      { symbol: "MSFT", company: "Microsoft Corp.", price: 326.41, change: 0.5 },
    ]);
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Stock Market Overview</h2>
      <StockTable stocks={stocks} />
    </div>
  );
};

export default Stocks;
