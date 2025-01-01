import React, { useEffect, useState } from "react";
import axios from "axios";

const PortfolioSummary = ({ onSummaryUpdate }) => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [error, setError] = useState("");

  // Fetch holdings data
  useEffect(() => {
    fetchHoldings();
  }, []);

  const fetchHoldings = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/allHoldings`);
      setAllHoldings(res.data);
      setError("");
    } catch (error) {
      console.error("Error fetching holdings:", error);
      setError("Failed to fetch holdings. Please try again later.");
    }
  };

  // Calculate My Investment and Current Value
  const myInvestment = allHoldings.reduce((sum, stock) => sum + stock.qty * stock.avg, 0);
  const currentValue = allHoldings.reduce(
    (sum, stock) => sum + stock.qty * (stock.price || stock.avg),
    0
  );

  // Notify parent component about the calculated summary
  useEffect(() => {
    if (onSummaryUpdate) {
      onSummaryUpdate({ myInvestment, currentValue });
    }
  }, [myInvestment, currentValue, onSummaryUpdate]);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
      <div
        style={{
          width: "400px",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#f8f9fa",
          marginLeft: '500px',
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            marginBottom: "20px",
            color: "#343a40",
            marginTop: '-900px',
          }}
        >
          Portfolio Summary
        </h2>
        {error && (
          <div
            style={{
              color: "red",
              fontSize: "16px",
              marginBottom: "15px",
            }}
          >
            {error}
          </div>
        )}
        <div
          style={{
            marginBottom: "15px",
            padding: "15px",
            borderRadius: "6px",
            backgroundColor: "#d1e7dd",
            color: "#0f5132",
            fontSize: "18px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <strong>My Investment:</strong> ₹{myInvestment.toFixed(2)}
        </div>
        <div
          style={{
            padding: "15px",
            borderRadius: "6px",
            backgroundColor: "#cff4fc",
            color: "#055160",
            fontSize: "18px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <strong>Current Value:</strong> ₹{currentValue.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSummary;


