// Home.js
import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import WatchList from "./WatchList";
import PortfolioSummary from "./PortfolioSummary";

// Import local images
import two from '../pics/two.jpg';
import one from '../pics/one.webp';
import three from '../pics/three.jpg';
import four from '../pics/four.jpg';
import five from '../pics/five.jpg';
import six from '../pics/six.webp';
import seven from '../pics/seven.jpg';
import eight from '../pics/eight.jpg';
import nine from '../pics/nine.avif';
import ten from '../pics/ten.jpg';

const tipsAndQuotes = [
  { text: "Never invest money you can't afford to lose. A wise trader knows their limits." },
  { image: two },
  { text: "The goal of a successful trader is to make the best trades. Money is secondary. – Alexander Elder" },
  { image: one },
  { text: "Did you know? The first stock exchange was established in Amsterdam in 1602." },
  { image: three },
  { text: "Cut your losses early and let your winners run – the golden rule of trading." },
  { image: four },
  { text: "Risk comes from not knowing what you're doing. Stay informed and stay ahead. – Warren Buffett" },
  { image: five },
  { text: "Diversify your portfolio to reduce risk. A balanced strategy wins the game." },
  { image: six },
  { text: "Markets can remain irrational longer than you can remain solvent. Manage your risks. – John Maynard Keynes" },
  { image: seven },
  { text: "Analyze the market trends, but always trust your strategy. Consistency is key." },
  { image: eight },
  { text: "Did you know? The S&P 500 represents about 80% of the value of the entire US stock market." },
  { image: nine },
  { text: "Patience is a trader's greatest ally. Great things take time." },
  { image: ten },
];

function Home() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [summary, setSummary] = useState({ myInvestment: 0, currentValue: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser") || "Guest");

    // Format the current date and time
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };

    setCurrentDateTime(now.toLocaleDateString(undefined, options));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tipsAndQuotes.length);
    }, 4000); // Rotate every 5 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div>
      <TopBar />
      <WatchList />

      {/* Portfolio Summary */}
      <div style={{ margin: "20px" }}>
        <PortfolioSummary onSummaryUpdate={setSummary} />
      </div>

      <p style={{ marginLeft: "1150px", marginTop: "-1120px", font: "menu" }}>
        Info updated as on {currentDateTime}
      </p>
      {/* <h1 style={{ marginTop: "60px" }}>Hi, {loggedInUser}.</h1> */}
      <h1
        style={{
          marginTop: "60px",
          fontSize: "42px",
          fontWeight: "600",
          color: "#333",
        }}
      >
        Hi, {loggedInUser}.
      </h1>

      <div
        style={{
          // marginLeft: '740px',
          // marginTop: '300px',
          // fontSize: "1.2em",
          // color: "#555",
          // padding: "10px",
          // borderRadius: "10px",
          // backgroundColor: "#f8f9fa",
          // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          // maxWidth: "600px",
          // margin: "600px auto", // Center horizontally and keep the vertical position
            position: "absolute", // Use absolute positioning for precise placement
            left: "740px",        // Set the horizontal position
            top: "300px",         // Set the vertical position
            fontSize: "1.2em",
            color: "#555",
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "#f8f9fa",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            maxWidth: "600px",
            marginTop: '200px'

        }}
      >
        {tipsAndQuotes[currentIndex].text ? (
          <p style={{ fontStyle: "italic" }}>{tipsAndQuotes[currentIndex].text}</p>
        ) : (
          <img
            src={tipsAndQuotes[currentIndex].image}
            alt="Trading Insight"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "0px",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
