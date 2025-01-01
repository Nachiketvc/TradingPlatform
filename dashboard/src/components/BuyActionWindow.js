// import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import GeneralContext from "./GeneralContext";
// import styles from "../styles/BuyActionWindow.module.css";

// const BuyActionWindow = ({ uid }) => {
//   const [stockQuantity, setStockQuantity] = useState(1);
//   const [stockPrice, setStockPrice] = useState(0.0);
//   const [addTo, setAddTo] = useState("Positions"); // State for radio button selection

//   const { closeBuyWindow } = useContext(GeneralContext);

//   const handleBuyClick = async () => {
//     if (!stockQuantity || stockQuantity <= 0 || !stockPrice || stockPrice <= 0) {
//       alert("Please enter valid quantity and price."); // Validation check
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:3002/allOrders", {
//         name: uid,
//         qty: parseFloat(stockQuantity),
//         price: parseFloat(stockPrice),
//         mode: "BUY",
//         addTo, // Use the "addTo" state value
//       });
//       console.log("Order processed successfully:", response.data);
//       alert("Order placed successfully!");
//     } catch (error) {
//       console.error("Error placing order:", error);
//       alert("Failed to place order. Please try again.");
//     }

//     closeBuyWindow();
//   };

//   const handleCancelClick = () => {
//     closeBuyWindow();
//   };

//   return (
//     <div style={{marginTop: '-500px'}}>
//     <div className={styles["buy-window-container"]} draggable="true">
//       <div className={styles["buy-window-inputs"]}>
//         <fieldset>
//           <legend>Qty.</legend>
//           <input
//             type="number"
//             name="qty"
//             id="qty"
//             onChange={(e) => setStockQuantity(e.target.value)}
//             value={stockQuantity}
//           />
//         </fieldset>
//         <fieldset>
//           <legend>Price</legend>
//           <input
//             type="number"
//             name="price"
//             id="price"
//             step="0.05"
//             onChange={(e) => setStockPrice(e.target.value)}
//             value={stockPrice}
//           />
//         </fieldset>
//         <fieldset>
//           <legend>Add to</legend>
//           <label>
//             <input
//               type="radio"
//               name="addTo"
//               value="Positions"
//               checked={addTo === "Positions"}
//               onChange={(e) => setAddTo(e.target.value)}
//             />
//             Positions
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="addTo"
//               value="Holdings"
//               checked={addTo === "Holdings"}
//               onChange={(e) => setAddTo(e.target.value)}
//             />
//             Holdings
//           </label>
//         </fieldset>
//       </div>
//       <div className={styles["buy-window-buttons"]}>
//         <span>Margin required ₹140.65</span>
//         <div>
//           <Link
//             className={`${styles["buy-window-btn"]} ${styles["buy-window-btn-blue"]}`}
//             onClick={handleBuyClick}
//           >
//             Buy
//           </Link>
//           <Link
//             to="#"
//             className={`${styles["buy-window-btn"]} ${styles["buy-window-btn-grey"]}`}
//             onClick={handleCancelClick}
//           >
//             Cancel
//           </Link>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default BuyActionWindow;


// import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import GeneralContext from "./GeneralContext";
// import styles from "../styles/BuyActionWindow.module.css";

// const BuyActionWindow = ({ uid }) => {
//   const [stockQuantity, setStockQuantity] = useState(1);
//   const [stockPrice, setStockPrice] = useState(0.0);
//   const [addTo, setAddTo] = useState("Positions"); // State for radio button selection

//   const { closeBuyWindow } = useContext(GeneralContext);

//   const handleBuyClick = async () => {
//     if (!stockQuantity || stockQuantity <= 0 || !stockPrice || stockPrice <= 0) {
//       alert("Please enter valid quantity and price."); // Validation check
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:3002/allOrders", {
//         name: uid,
//         qty: parseFloat(stockQuantity),
//         price: parseFloat(stockPrice),
//         mode: "BUY",
//         addTo, // Use the "addTo" state value to decide whether to add to Positions or Holdings
//       });
//       console.log("Order processed successfully:", response.data);
//       alert("Order placed successfully!");
//     } catch (error) {
//       console.error("Error placing order:", error);
//       alert("Failed to place order. Please try again.");
//     }

//     closeBuyWindow();
//   };

//   const handleCancelClick = () => {
//     closeBuyWindow();
//   };

//   return (
//     <div style={{marginTop: '-500px'}}>
//       <div className={styles["buy-window-container"]} draggable="true">
//         <div className={styles["buy-window-inputs"]}>
//           <fieldset>
//             <legend>Qty.</legend>
//             <input
//               type="number"
//               name="qty"
//               id="qty"
//               onChange={(e) => setStockQuantity(e.target.value)}
//               value={stockQuantity}
//             />
//           </fieldset>
//           <fieldset>
//             <legend>Price</legend>
//             <input
//               type="number"
//               name="price"
//               id="price"
//               step="0.05"
//               onChange={(e) => setStockPrice(e.target.value)}
//               value={stockPrice}
//             />
//           </fieldset>
//           <fieldset>
//             <legend>Add to</legend>
//             <label>
//               <input
//                 type="radio"
//                 name="addTo"
//                 value="Positions"
//                 checked={addTo === "Positions"}
//                 onChange={(e) => setAddTo(e.target.value)}
//               />
//               Positions
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="addTo"
//                 value="Holdings"
//                 checked={addTo === "Holdings"}
//                 onChange={(e) => setAddTo(e.target.value)}
//               />
//               Holdings
//             </label>
//           </fieldset>
//         </div>
//         <div className={styles["buy-window-buttons"]}>
//           <span>Margin required ₹140.65</span>
//           <div>
//             <Link
//               className={`${styles["buy-window-btn"]} ${styles["buy-window-btn-blue"]}`}
//               onClick={handleBuyClick}
//             >
//               Buy
//             </Link>
//             <Link
//               to="#"
//               className={`${styles["buy-window-btn"]} ${styles["buy-window-btn-grey"]}`}
//               onClick={handleCancelClick}
//             >
//               Cancel
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyActionWindow;


// import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import GeneralContext from "./GeneralContext";
// import styles from "../styles/BuyActionWindow.module.css";


// const BuyActionWindow = ({ uid }) => {
//   const [stockQuantity, setStockQuantity] = useState(1);
//   const [stockPrice, setStockPrice] = useState(0.0);
//   const [addTo, setAddTo] = useState("Positions"); // State for radio button selection

//   const { closeBuyWindow } = useContext(GeneralContext);


//   const handleBuyClick = async () => {
//     if (!stockQuantity || stockQuantity <= 0 || !stockPrice || stockPrice <= 0) {
//       alert("Please enter valid quantity and price."); // Validation check
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:3002/buyStock", {
//         name: uid,
//         qty: parseFloat(stockQuantity),
//         price: parseFloat(stockPrice),
//         mode: "BUY",
//         addTo, // Use the "addTo" state value to decide whether to add to Positions or Holdings
//       });
//       console.log("Order processed successfully:", response.data);
//       alert("Order placed successfully!");
//     } catch (error) {
//       console.error("Error placing order:", error);
//       alert("Failed to place order. Please try again.");
//     }

//     closeBuyWindow();
//   };

//   const handleCancelClick = () => {
//     closeBuyWindow();
//   };

//   return (
//     <div style={{marginTop: '-500px'}}>
//       <div className={styles["buy-window-container"]} draggable="true">
//         <div className={styles["buy-window-inputs"]}>
//           <fieldset>
//             <legend>Qty.</legend>
//             <input
//               type="number"
//               name="qty"
//               id="qty"
//               onChange={(e) => setStockQuantity(e.target.value)}
//               value={stockQuantity}
//             />
//           </fieldset>
//           <fieldset>
//             <legend>Price</legend>
//             <input
//               type="number"
//               name="price"
//               id="price"
//               step="0.05"
//               onChange={(e) => setStockPrice(e.target.value)}
//               value={stockPrice}
//             />
//           </fieldset>
//           <fieldset>
//             <legend>Add to</legend>
//             <label>
//               <input
//                 type="radio"
//                 name="addTo"
//                 value="Positions"
//                 checked={addTo === "Positions"}
//                 onChange={(e) => setAddTo(e.target.value)}
//               />
//               Positions
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="addTo"
//                 value="Holdings"
//                 checked={addTo === "Holdings"}
//                 onChange={(e) => setAddTo(e.target.value)}
//               />
//               Holdings
//             </label>
//           </fieldset>
//         </div>
//         <div className={styles["buy-window-buttons"]}>
//           <span>Margin required ₹140.65</span>
//           <div>
//             <Link
//               className={`${styles["buy-window-btn"]} ${styles["buy-window-btn-blue"]}`}
//               onClick={handleBuyClick}
//             >
//               Buy
//             </Link>
//             <Link
//               to="#"
//               className={`${styles["buy-window-btn"]} ${styles["buy-window-btn-grey"]}`}
//               onClick={handleCancelClick}
//             >
//               Cancel
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyActionWindow;



// import React, { useState, useContext } from "react";
// import axios from "axios";
// import GeneralContext from "./GeneralContext";
// import styles from "../styles/BuyActionWindow.module.css";

// const BuyActionWindow = ({ uid }) => {
//   const [stockQuantity, setStockQuantity] = useState(1);
//   const [stockPrice, setStockPrice] = useState(0.0);
//   const [addTo, setAddTo] = useState("Positions");
//   const { closeBuyWindow } = useContext(GeneralContext);

//   const handleBuyClick = async () => {
//     if (stockQuantity <= 0 || stockPrice <= 0) {
//       alert("Please enter valid quantity and price.");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:3002/buyStock", {
//         name: uid,
//         qty: parseFloat(stockQuantity),
//         price: parseFloat(stockPrice),
//         mode: "BUY",
//         addTo,
//       });
//       console.log("Order processed successfully:", response.data);
//       alert("Order placed successfully!");
//       closeBuyWindow();
//     } catch (error) {
//       console.error("Error placing order:", error);
//       alert("Failed to place order. Please try again.");
//     }
//   };

//   return (
//     <>
//       <div className="modal-overlay" onClick={closeBuyWindow}></div>
//       <div className={styles["buy-window-container"]}>
//         <h3>Buy Stock: {uid}</h3>
//         <div className={styles["buy-window-inputs"]}>
//           <fieldset>
//             <legend>Qty.</legend>
//             <input
//               type="number"
//               value={stockQuantity}
//               onChange={(e) => setStockQuantity(e.target.value)}
//             />
//           </fieldset>
//           <fieldset>
//             <legend>Price</legend>
//             <input
//               type="number"
//               value={stockPrice}
//               onChange={(e) => setStockPrice(e.target.value)}
//             />
//           </fieldset>
//           <fieldset>
//             <legend>Add to</legend>
//             <label>
//               <input
//                 type="radio"
//                 name="addTo"
//                 value="Positions"
//                 checked={addTo === "Positions"}
//                 onChange={(e) => setAddTo(e.target.value)}
//               />
//               Positions
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="addTo"
//                 value="Holdings"
//                 checked={addTo === "Holdings"}
//                 onChange={(e) => setAddTo(e.target.value)}
//               />
//               Holdings
//             </label>
//           </fieldset>
//         </div>
//         <div className={styles["buy-window-buttons"]}>
//           <button onClick={handleBuyClick}>Buy</button>
//           <button onClick={closeBuyWindow}>Cancel</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BuyActionWindow;

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

