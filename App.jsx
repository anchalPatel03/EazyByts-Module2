import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx"; 
import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/HomeStocks.jsx"; // Updated HomeStocks to Home
import Stocks from "./pages/Stocks.jsx";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <div className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stocks" element={<Stocks />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
