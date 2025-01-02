import React from 'react';
import TopBar from './TopBar';
import Menu from './Menu';
import Watchlist from './WatchList';
import Holdings from './Holdings';
import Orders from './Orders';
import Positions from './Positions';
import { Routes, Route, Outlet } from 'react-router-dom';
import BuyActionWindow from './BuyActionWindow';
import { useState } from 'react';

const PrivateLayout = () => {
  const [showBuyWindow, setShowBuyWindow] = useState(false);
  const [uid, setUid] = useState('');

  const handleBuyClick = (uid) => {
    setShowBuyWindow(true);
    setUid(uid);
  };

  const handleCloseBuyWindow = () => {
    setShowBuyWindow(false);
  };

  return (
    <div>
      <TopBar />
      <div className="container">
        <div className="menu-container">
          <Menu handleBuyClick={handleBuyClick} />
        </div>
        <div className="dynamic-container">
          <Outlet />
        </div>
      </div>
      <Watchlist />
      {showBuyWindow && (
        <BuyActionWindow
          uid={uid}
          onClose={handleCloseBuyWindow}
        />
      )}
    </div>
  );
};

export default PrivateLayout;




