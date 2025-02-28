const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <nav>
        <ul>
          <li className="mb-4">
            <a href="/" className="block p-2 hover:bg-gray-700 rounded">Home</a>
          </li>
          <li className="mb-4">
            <a href="/stocks" className="block p-2 hover:bg-gray-700 rounded">Stocks</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
