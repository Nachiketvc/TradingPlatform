import React, { useState } from "react";
import Holdings from "./Holdings";

const HoldingsSummary = () => {
  const [totalHoldings, setTotalHoldings] = useState(0); // State for total holdings
  const [totalInvestment, setTotalInvestment] = useState(0); // State for total investment

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Total Holdings Value: ₹{totalHoldings.toFixed(2)}</p>
      <p>Total Investment: ₹{totalInvestment.toFixed(2)}</p>
      <p>
        {totalHoldings >= totalInvestment
          ? "Profit"
          : "Loss"}: ₹{Math.abs(totalHoldings - totalInvestment).toFixed(2)}
      </p>
      <Holdings
        onUpdateTotalHoldings={setTotalHoldings} // Update holdings state
        onUpdateTotalInvestment={setTotalInvestment} // Update investment state
      />
    </div>
  );
};

export default HoldingsSummary;



