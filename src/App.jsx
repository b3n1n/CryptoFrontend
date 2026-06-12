import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Market from "./pages/Market";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((response) => response.json())
      .then((data) => {
        const filteredCoins = data.filter((coin) => {
          const change = coin.price_change_percentage_24h;

          return (
            change !== null &&
            change !== undefined &&
            !isNaN(change) &&
            change !== 0
          );
        });

        setCoins(filteredCoins);
      });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home coins={coins} />} />
        <Route path="/portfolio" element={<Portfolio coins={coins} />} />
        <Route path="/market" element={<Market coins={coins} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* 404  not forund + guard */}
      </Routes>
    </>
  );
}

export default App;
