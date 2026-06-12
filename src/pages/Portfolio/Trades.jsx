import React from "react";

function Trades({
  time,
  type,
  amount,
  symbol,
}) {
  return (
    <tr className="border-bottom">
      <td className="py-3 text-secondary">
        {time}
      </td>

      <td
        className={`py-3 fw-semibold ${
          type === "BUY"
            ? "text-success"
            : type === "SELL"
            ? "text-danger"
            : "text-primary"
        }`}
      >
        {type}
      </td>

      <td className="py-3 text-end">
        {symbol}
      </td>

      <td className="py-3 text-end">
        {amount}
      </td>
    </tr>
  );
}

export default Trades;