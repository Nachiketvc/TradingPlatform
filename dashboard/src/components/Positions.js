import { useState, useEffect } from "react";
import axios from "axios";
import TopBar from "./TopBar";
import WatchList from "./WatchList";

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

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Chart options
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Positions",
    },
  },
};

// Vertical Graph Component
export function VerticalGraph({ data }) {
  return <Bar options={options} data={data} />;
}

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]); // Initializing as an empty array
  const [error, setError] = useState("");
  const [isSelling, setIsSelling] = useState(false);

  // Fetch positions on component mount
  useEffect(() => {
    fetchPositions();
  }, []);

  const fetchPositions = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/allPositions`);

      // Validate that the response data is an array
      if (Array.isArray(res.data)) {
        setAllPositions(res.data); // Set only if it's an array
        setError(""); // Clear any previous errors
      } else {
        throw new Error("Invalid data format: Expected an array");
      }
    } catch (error) {
      console.error("Error fetching positions:", error);
      setError("Failed to fetch positions. Please try again later.");
      setAllPositions([]); // Fallback to an empty array
    }
  };

  const handleSellPosition = async (name, qty, price) => {
    if (isSelling) return; // Prevent duplicate actions
    setIsSelling(true);
  
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/sellStock`, {
        name,
        qty,
        price,
        removeFrom: "Positions",
      });
  
      if (res.status === 200) {
        // Update state locally to reflect sold position
        setAllPositions((prevPositions) =>
          prevPositions.filter((position) => position.name !== name)
        );
        alert("Position sold successfully!");
  
        // Optionally refetch data to ensure consistency
        fetchPositions();
      } else {
        alert("Error selling position: " + res.data.error);
      }
    } catch (error) {
      console.error("Error selling position:", error);
      setError("Failed to sell position. Please try again.");
    } finally {
      setIsSelling(false);
    }
  };
  

  // Prepare data for the chart
  const labels = Array.isArray(allPositions)
    ? allPositions.map((stock) => stock.name)
    : [];
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: Array.isArray(allPositions)
          ? allPositions.map((stock) => stock.price)
          : [],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const TableRow = ({ position }) => {
    const {
      name = "N/A",
      qty = 0,
      avg = 0,
      price = 0,
      value = 0,
    } = position || {}; // Default destructuring to avoid undefined issues

    const profitLoss = value - avg * qty;
    const isProfit = profitLoss >= 0;

    return (
      <tr>
        <td>{name}</td>
        <td>{qty}</td>
        <td>{avg.toFixed(2)}</td>
        <td>{price.toFixed(2)}</td>
        <td>{value.toFixed(2)}</td>
        <td className={isProfit ? "profit" : "loss"}>
          {profitLoss.toFixed(2)}
        </td>
        <td>
          <button
            onClick={() => handleSellPosition(name, qty, price)}
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
      <TopBar />
      <WatchList />
      <div className="positions-container">
        <h3 className="title">Positions ({allPositions?.length || 0})</h3>

        {error && <div className="error-message">{error}</div>}

        {Array.isArray(allPositions) && allPositions.length > 0 ? (
          <table className="positions-table">
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg. cost</th>
                <th>LTP</th>
                <th>Cur. val</th>
                <th>P&L</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allPositions.map((position, index) => (
                <TableRow key={index} position={position} />
              ))}
            </tbody>
          </table>
        ) : (
          <div>No positions available</div>
        )}
        <div className="graph-container">
          <VerticalGraph data={data} />
        </div>
      </div>
    </>
  );
};

export default Positions;

