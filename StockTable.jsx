const StockTable = ({ stocks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="py-2 px-4 border">Symbol</th>
            <th className="py-2 px-4 border">Company</th>
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Change</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.symbol} className="text-center border hover:bg-gray-100">
              <td className="py-2 px-4 border">{stock.symbol}</td>
              <td className="py-2 px-4 border">{stock.company}</td>
              <td className="py-2 px-4 border">${stock.price}</td>
              <td className={`py-2 px-4 border ${stock.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                {stock.change}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
