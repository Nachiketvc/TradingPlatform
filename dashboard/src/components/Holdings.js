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

