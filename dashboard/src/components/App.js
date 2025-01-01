import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "./Menu";

const StockMarketNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "cthd6k1r01qtho2p7n5gcthd6k1r01qtho2p7n60"; 
  const NEWS_URL = `https://finnhub.io/api/v1/news?category=general&token=${API_KEY}`;


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(NEWS_URL);
        setNews(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch news. Please try again.");
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) {
    return <div style={{fontFamily: 'Arial, sans-serif', margin: '20px auto', maxWidth: '800px', padding: '20px', backgroundColor: '#ffffff', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>Loading news...</div>;
  }

  if (error) {
    return <div style={{fontFamily: 'Arial, sans-serif', margin: '20px auto', maxWidth: '800px', padding: '20px', backgroundColor: '#ffffff', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>{error}</div>;
  }

  return (
    <>
    <div style={{marginLeft: '350px'}}>
    <Menu/>
    </div>
    <div style={{fontFamily: 'Arial, sans-serif', margin: '20px auto', maxWidth: '800px', padding: '20px', backgroundColor: '#ffffff', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
      <h2 style={{fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: '#333'}}>Stock Market News</h2>
      <ul style={{listStyle: 'none', padding: 0}}>
        {news.slice(0, 10).map((article, index) => (
          <li key={index} style={{marginBottom: '20px', padding: '15px', borderBottom: '1px solid #ddd', transition: 'background-color 0.3s ease'}}>
            <a href={article.url} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: '#007BFF', fontSize: '18px', fontWeight: 'bold'}}>
              <h3 style={{margin: 0}}>{article.headline}</h3>
            </a>
            <p style={{margin: '5px 0', color: '#666', fontSize: '14px', lineHeight: '1.5'}}>{article.summary}</p>
            <p style={{margin: '5px 0', color: '#666', fontSize: '14px', lineHeight: '1.5'}}>
              <strong style={{color: '#333'}}>Source:</strong> {article.source} |{" "}
              <strong style={{color: '#333'}}>Published:</strong>{" "}
              {new Date(article.datetime * 1000).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default StockMarketNews;

