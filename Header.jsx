const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">Stock Market Dashboard</h1>
      <nav>
        <a href="/" className="px-4 py-2 hover:text-blue-400">Home</a>
        <a href="/stocks" className="px-4 py-2 hover:text-blue-400">Stocks</a>
      </nav>
    </header>
  );
};

export default Header;
