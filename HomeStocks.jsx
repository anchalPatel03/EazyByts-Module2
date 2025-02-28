const HomeStocks = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      {/* Logo */}
      <img src="/logo.png" alt="Stock Market Logo" className="w-40 h-40 mb-4" />
      
      {/* Welcome Message */}
      <h2 className="text-2xl font-bold mb-4">Welcome to Stock Market Dashboard</h2>
      <p className="text-gray-700">
        Monitor stock performance, track your portfolio, and analyze trends in real-time.
      </p>
    </div>
  );
};

export default HomeStocks;
