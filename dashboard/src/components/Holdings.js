// import { useState, useEffect } from "react";
// import axios from "axios";
// import TopBar from "./TopBar";
// import WatchList from "./WatchList";
// import { useNavigate } from "react-router-dom";



// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// // Register Chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// // Chart options
// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     title: {
//       display: true,
//       text: "Holdings",
//     },
//   },
// };

// // Vertical Graph Component
// export function VerticalGraph({ data }) {
//   return <Bar options={options} data={data} />;
// }

// const Holdings = () => {
//   const [allHoldings, setAllHoldings] = useState([]);
//   const [error, setError] = useState("");
//   const [isSelling, setIsSelling] = useState(false);

//   useEffect(() => {
//     fetchHoldings();
//   }, []);

//   const fetchHoldings = async () => {
//     try {
//       const res = await axios.get("http://localhost:3002/allHoldings");
//       setAllHoldings(res.data);
//       setError(""); // Clear any previous errors
//     } catch (error) {
//       console.error("Error fetching holdings:", error);
//       setError("Failed to fetch holdings. Please try again later.");
//     }
//   };

//   const [totalCurrentValue, setTotalCurrentValue] = useState(0);
//   const navigate = useNavigate();

//   // Compute total current value
//   const calculateTotalCurrentValue = () => {
//     return allHoldings.reduce((sum, stock) => sum + stock.curVal, 0);
//   };

//   const handleViewTotal = () => {
//     const total = calculateTotalCurrentValue();
//     setTotalCurrentValue(total);
//     navigate("/total", { state: { total } }); // Pass total via state
//   };

//   const handleSellStock = async (name, qty, price) => {
//     if (isSelling) return; // Prevent duplicate API calls
//     setIsSelling(true);

//     try {
//       const res = await axios.post("http://localhost:3002/sellStock", {
//         name,
//         qty,
//         price,
//         removeFrom: "Holdings",
//       });

//       if (res.status === 200) {
//         alert("Stock sold successfully!");

//         // Update holdings in state without refetching all data
//         const updatedHoldings = allHoldings.filter((holding) => holding.name !== name);
//         setAllHoldings(updatedHoldings);

//         setError(""); // Clear any errors
//       } else {
//         alert("Error selling stock: " + res.data.error);
//       }
//     } catch (error) {
//       console.error("Error selling stock:", error);
//       setError("Failed to sell stock. Please try again.");
//     } finally {
//       setIsSelling(false);
//     }
//   };

//   // Prepare data for the chart
//   const labels = allHoldings.map((stock) => stock.name);
//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Stock Price",
//         data: allHoldings.map((stock) => stock.price),
//         backgroundColor: "rgba(54, 162, 235, 0.5)",
//         borderColor: "rgba(54, 162, 235, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const TableRow = ({ stock }) => {
//     const {
//       name = "N/A",
//       qty = 0,
//       avg = 0,
//       price = 0,
//       value = 0,
//       net = 0,
//       day = 0,
//     } = stock || {};

//     const curValue = value || 0; // Fallback to 0 if value is undefined
//     const profitLoss = curValue - avg * qty;
//     const isProfit = profitLoss >= 0.0;

//     return (
//       <tr>
//         <td>{name}</td>
//         <td>{qty}</td>
//         <td>{avg.toFixed(2)}</td>
//         <td>{price.toFixed(4)}</td>
//         <td>{curValue.toFixed(2)}</td>
//         <td className={isProfit ? "profit" : "loss"}>
//           {profitLoss.toFixed(2)}
//         </td>
//         <td>{net}</td>
//         <td>{day}</td>
//         <td>
//           <button
//             onClick={() => handleSellStock(name, qty, price)}
//             disabled={isSelling}
//           >
//             {isSelling ? "Processing..." : "Sell"}
//           </button>
//         </td>
//       </tr>
//     );
//   };

//   return (
//     <>
//       <TopBar />
//       <WatchList />
//       <div className="holdings-container">
//         <h3 className="title">Holdings ({allHoldings.length})</h3>

//         {error && <div className="error-message">{error}</div>}

//         <table className="holdings-table">
//           <thead>
//             <tr>
//               <th>Instrument</th>
//               <th>Qty.</th>
//               <th>Avg. cost</th>
//               <th>LTP</th>
//               <th>Cur. val</th>
//               <th>P&L</th>
//               <th>Net chg.</th>
//               <th>Day chg.</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {allHoldings.map((stock, index) => (
//               <TableRow key={index} stock={stock} />
//             ))}
//           </tbody>
//         </table>
//         <div className="graph-container">
//           <VerticalGraph data={data} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Holdings;


// import { useState, useEffect } from "react";
// import axios from "axios";
// import TopBar from "./TopBar";
// import WatchList from "./WatchList";
// import { useNavigate } from "react-router-dom";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// // Register Chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// // Chart options
// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     title: {
//       display: true,
//       text: "Holdings",
//     },
//   },
// };

// // Vertical Graph Component
// export function VerticalGraph({ data }) {
//   return <Bar options={options} data={data} />;
// }

// const Holdings = () => {
//   const [allHoldings, setAllHoldings] = useState([]);
//   const [error, setError] = useState("");
//   const [isSelling, setIsSelling] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchHoldings();
//   }, []);

//   const fetchHoldings = async () => {
//     try {
//       const res = await axios.get("http://localhost:3002/allHoldings");
//       setAllHoldings(res.data);
//       setError("");
//     } catch (error) {
//       console.error("Error fetching holdings:", error);
//       setError("Failed to fetch holdings. Please try again later.");
//     }
//   };

//   const handleSellStock = async (name, qty, price) => {
//     if (isSelling) return;
//     setIsSelling(true);

//     try {
//       const res = await axios.post("http://localhost:3002/sellStock", {
//         name,
//         qty,
//         price,
//         removeFrom: "Holdings",
//       });

//       if (res.status === 200) {
//         alert("Stock sold successfully!");
//         setAllHoldings(allHoldings.filter((holding) => holding.name !== name));
//         setError("");
//       } else {
//         alert("Error selling stock: " + res.data.error);
//       }
//     } catch (error) {
//       console.error("Error selling stock:", error);
//       setError("Failed to sell stock. Please try again.");
//     } finally {
//       setIsSelling(false);
//     }
//   };

//   // Generate graph data based on LTP or Avg Cost fallback
//   const labels = allHoldings.map((stock) => stock.name);
//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "LTP (or Avg Cost)",
//         data: allHoldings.map((stock) => stock.price || stock.avg),
//         backgroundColor: "rgba(54, 162, 235, 0.5)",
//         borderColor: "rgba(54, 162, 235, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const TableRow = ({ stock }) => {
//     const {
//       name = "N/A",
//       qty = 0,
//       avg = 0,
//       price = null,
//       net = 0,
//       day = 0,
//     } = stock || {};

//     // Use `avg` value if `price` is not available
//     const displayedPrice = price || avg;

//     return (
//       <tr>
//         <td>{name}</td>
//         <td>{qty}</td>
//         <td>{avg.toFixed(2)}</td>
//         <td>{displayedPrice.toFixed(2)}</td>
//         <td>{net}</td>
//         <td>{day}</td>
//         <td>
//           <button
//             onClick={() => handleSellStock(name, qty, displayedPrice)}
//             disabled={isSelling}
//           >
//             {isSelling ? "Processing..." : "Sell"}
//           </button>
//         </td>
//       </tr>
//     );
//   };

//   return (
//     <>
//       <TopBar />
//       <WatchList />
//       <div className="holdings-container">
//         <h3 className="title">Holdings ({allHoldings.length})</h3>
//         {error && <div className="error-message">{error}</div>}
//         <table className="holdings-table">
//           <thead>
//             <tr>
//               <th>Instrument</th>
//               <th>Qty.</th>
//               <th>Avg. cost</th>
//               <th>LTP</th>
//               <th>Net chg.</th>
//               <th>Day chg.</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {allHoldings.map((stock, index) => (
//               <TableRow key={index} stock={stock} />
//             ))}
//           </tbody>
//         </table>
//         <div className="graph-container">
//           <VerticalGraph data={data} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Holdings;



import { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import TopBar from "./TopBar";
import WatchList from "./WatchList";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Chart options for the bar graph
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Holdings",
    },
  },
};

// VerticalGraph Component
export function VerticalGraph({ data }) {
  return <Bar options={options} data={data} />;
}

const Holdings = ({ onSummaryUpdate }) => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [error, setError] = useState("");
  const [isSelling, setIsSelling] = useState(false);

  // Fetch holdings data on component mount
  useEffect(() => {
    fetchHoldings();
  }, []);

  // Fetch all holdings from the API
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

  // Notify parent component (Home) about the calculated summary
  useEffect(() => {
    if (onSummaryUpdate) {
      onSummaryUpdate({ myInvestment, currentValue });
    }
  }, [myInvestment, currentValue, onSummaryUpdate]);

  // Handle selling stock
  const handleSellStock = async (name, qty, price) => {
    if (isSelling) return;
    setIsSelling(true);

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/sellStock`, {
        name,
        qty,
        price,
        removeFrom: "Holdings",
      });

      if (res.status === 200) {
        alert("Stock sold successfully!");
        setAllHoldings(allHoldings.filter((holding) => holding.name !== name));
        setError("");
      } else {
        alert("Error selling stock: " + res.data.error);
      }
    } catch (error) {
      console.error("Error selling stock:", error);
      setError("Failed to sell stock. Please try again.");
    } finally {
      setIsSelling(false);
    }
  };

  // Graph data preparation
  const labels = allHoldings.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: "LTP (or Avg Cost)",
        data: allHoldings.map((stock) => stock.price || stock.avg),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Render a single row for the holdings table
  const TableRow = ({ stock }) => {
    const {
      name = "N/A",
      qty = 0,
      avg = 0,
      price = null,
      net = 0,
      day = 0,
    } = stock || {};

    // Use avg if price is unavailable
    const displayedPrice = price || avg;

    // Calculate total
    const total = qty * avg;

    return (
      <tr>
        <td>{name}</td>
        <td>{qty}</td>
        <td>{avg.toFixed(2)}</td>
        <td>{total.toFixed(2)}</td> {/* New Total column */}
        <td>{displayedPrice.toFixed(2)}</td>
        <td>{net}</td>
        <td>{day}</td>
        <td>
          <button
            onClick={() => handleSellStock(name, qty, displayedPrice)}
            disabled={isSelling}
          >
            {isSelling ? "Processing..." : "Sell"}
          </button>
        </td>
      </tr>
    );
  };

  return (
    <>
    <TopBar/>
    <WatchList/>
    <div className="holdings-container">
      <h3 className="title">Holdings ({allHoldings.length})</h3>
      {error && <div className="error-message">{error}</div>}
      <table className="holdings-table">
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>Total</th> {/* New Total column */}
            <th>LTP</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allHoldings.map((stock, index) => (
            <TableRow key={index} stock={stock} />
          ))}
        </tbody>
      </table>
      <div className="graph-container">
        <VerticalGraph data={data} />
      </div>
    </div>
    </>
  );
};

export default Holdings;

