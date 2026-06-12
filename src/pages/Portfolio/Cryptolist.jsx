import React from "react";

function Cryptolist({ wallets }) {
  return (
    <div>
      {wallets.map((wallet, index) => (
        <div
          key={index}
          className="d-flex justify-content-between align-items-center bg-white rounded-4 p-3 mb-3"
        >
          <div className="d-flex align-items-center">
            <div
              className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center me-3 coins-view"
            >
              {wallet.asset[0]}
            </div>

            <div>
              <div className="fw-bold fs-5">
                {wallet.asset}
              </div>

              <div className="text-secondary">
                {wallet.balance} {wallet.asset}
              </div>
            </div>
          </div>

          <div className="text-end">
            <div className="fw-bold fs-4">
              {wallet.balance}
            </div>

            <div className="text-secondary">
              Locked: {wallet.lockedBalance}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cryptolist;