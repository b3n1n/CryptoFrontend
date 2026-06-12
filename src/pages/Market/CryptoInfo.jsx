import React from "react";
import { useEffect, useState } from "react";

function CryptoInfo({coin, index}) {

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

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <b>{coin.symbol.toUpperCase()}</b> {coin.name}
      </td>
      <td className="fw-bold">{formatPrice(coin.current_price)}</td>
      <td className="text-success d-flex justify-content-center align-items-center">
        {coin.price_change_percentage_24h > 0 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="green"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-trending-up w-3 h-3 m-1"
          >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
            <polyline points="16 7 22 7 22 13"></polyline>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="red red-trending-down w-3 h-3"
            data-fg-c98638="1.19:1.3300:/src/app/components/MarketOverview.tsx:43:81:2594:36:e:TrendingDown::::::CGx5"
            data-fgid-c98638=":r8a:"
          >
            <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
            <polyline points="16 17 22 17 22 11"></polyline>
          </svg>
        )}
        <span
          className={
            coin.price_change_percentage_24h > 0
              ? "text-success"
              : "text-danger"
          }
        >
          {coin.price_change_percentage_24h}
        </span>
      </td>
      <td className="fw-bold">{formatPrice(coin.total_volume)}</td>
      <td className="fw-bold">{formatPrice(coin.market_cap)}</td>
      <td>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-star w-4 h-4"
          data-fg-c98649="1.19:1.3300:/src/app/components/MarketOverview.tsx:51:21:3071:75:e:Star::::::hX0"
          data-fgid-c98649=":r8u:"
        >
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
        </svg>
      </td>
    </tr>
  );
}

export default CryptoInfo;
