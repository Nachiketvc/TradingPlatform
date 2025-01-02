import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import styles from "../styles/BuyActionWindow.module.css";

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
      const response = await axios.post("http://localhost:3002/buyStock", {
        name: uid,
        qty: parseFloat(stockQuantity),
        price: parseFloat(stockPrice),
        mode: "BUY",
        addTo,
      });
      console.log("Order processed successfully:", response.data);
      alert("Order placed successfully!");
      closeBuyWindow();
      onClose(); // Close the window after buying
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

export default BuyActionWindow;

