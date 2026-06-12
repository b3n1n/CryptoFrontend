import React from "react";
import BuyMenu from "./BuyMenu";
import Graph from "./Graph";

function Body({coins}) {
  return (
    <>
      <div className="container d-flex">
        <Graph coins={coins}></Graph>
        <BuyMenu coins={coins}></BuyMenu>
      </div>
    </>
  );
}

export default Body;
