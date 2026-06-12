import React, { useEffect, useRef, useState } from "react";
import "./RateLine.css";

function RateLine({ coins }) {
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      const first = trackRef.current.children[0];
      setDistance(first.scrollWidth);
    }
  }, [coins]);

  const formatPrice = (price) => {
    if (price > 1) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(price);
    }

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 6,
      maximumFractionDigits: 8,
    }).format(price);
  };

  const renderCoin = (coins, i) => (
    <div className="coin" key={i}>
      {coins.name} {formatPrice(coins.current_price)}{" "}
      <span
        className={
          coins.price_change_percentage_24h >= 0 ? "greenNumber" : "redNumber"
        }
      >
        {coins.price_change_percentage_24h >= 0 ? "▲" : "▼"}{" "}
        {coins.price_change_percentage_24h.toFixed(2)}%
      </span>
    </div>
  );

  return (
    <div className="rateLine-container">
      <div
        className="rateLine-track"
        ref={trackRef}
        style={{
          animationDuration: `${distance / 60}s`,
          "--move": `${distance}px`,
        }}
      >
        <div className="rateLine-content">{coins.map(renderCoin)}</div>

        <div className="rateLine-content">{coins.map(renderCoin)}</div>
      </div>
    </div>
  );
}

export default RateLine;
