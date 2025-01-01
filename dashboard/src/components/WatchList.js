import React, { useState, useContext } from "react";
import { watchlist } from "../data/data";
import { Tooltip, Grow } from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import GeneralContext from "./GeneralContext";
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import styles from "../styles/BuyActionWindow.module.css";

// Register Chart.js components
ChartJS.register(ArcElement, ChartTooltip, Legend);

// Doughnut Chart Component
export function DoughnutChart({ data }) {
  return <Doughnut data={data} />;
}

function Watchlist() {
  // Define the data for the Doughnut chart
  const data = {
    labels: watchlist.map((stock) => stock.name), // Use stock names as labels
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price), // Stock prices as data
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="watchlist-container">
      <div className="header">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">9 / 50</span>
      </div>
      {/* Render stock list once */}
      <ul className="stock-list">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>
      {/* Render the Doughnut chart */}
      <DoughnutChart data={data} />
    </div>
  );
}

const WatchListItem = ({ stock }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupState = (state) => {
    setIsPopupOpen(state);
  };

  return (
    <li className="stock-item">
      <p className={`stock-name ${stock.isDown ? "down" : "up"}`}>{stock.name}</p>
      <span className="percent">{stock.percent}</span>
      {stock.isDown ? (
        <KeyboardArrowDown className="arrow down" />
      ) : (
        <KeyboardArrowUp className="arrow up" />
      )}
      <span className="price">{stock.price}</span>
      <WatchListActions
        uid={stock.name}
        isPopupOpen={isPopupOpen}
        onPopupStateChange={handlePopupState}
      />
    </li>
  );
};

const WatchListActions = ({ uid, isPopupOpen, onPopupStateChange }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    onPopupStateChange(true); // Notify parent to open the popup
    generalContext.openBuyWindow(uid);
  };

  const handleClosePopup = () => {
    onPopupStateChange(false); // Notify parent to close the popup
  };

  return (
    <span className="actions">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button className="buy" onClick={handleBuyClick}>
          Buy
        </button>
      </Tooltip>
      {isPopupOpen && <BuyActionWindow uid={uid} onClose={handleClosePopup} />}
    </span>
  );
};

const BuyActionWindow = ({ uid, onClose }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [addTo, setAddTo] = useState("Positions");
  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    if (stockQuantity <= 0 || stockPrice <= 0) {
      alert("Please enter valid quantity and price.");
      return;
    }
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/buyStock`, {
        name: uid,
        qty: parseFloat(stockQuantity),
        price: parseFloat(stockPrice),
        mode: "BUY",
        addTo,
      });
      console.log("Order processed successfully:", response.data);
      alert("Order placed successfully!");
      closeBuyWindow();
      onClose(); // Automatically close the popup on success
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className={styles["buy-window-container"]}>
        <h3>Buy Stock: {uid}</h3>
        <div className={styles["buy-window-inputs"]}>
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Add to</legend>
            <label>
              <input
                type="radio"
                name="addTo"
                value="Positions"
                checked={addTo === "Positions"}
                onChange={(e) => setAddTo(e.target.value)}
              />
              Positions
            </label>
            <label>
              <input
                type="radio"
                name="addTo"
                value="Holdings"
                checked={addTo === "Holdings"}
                onChange={(e) => setAddTo(e.target.value)}
              />
              Holdings
            </label>
          </fieldset>
        </div>
        <div className={styles["buy-window-buttons"]}>
          <button onClick={handleBuyClick}>Buy</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default Watchlist;
