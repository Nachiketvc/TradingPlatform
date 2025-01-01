import React from 'react';
import TopBar from './TopBar';
import Menu from './Menu';
import Watchlist from './WatchList';
import Holdings from './Holdings';
import Orders from './Orders';
import Positions from './Positions';
import { Routes, Route, Outlet } from 'react-router-dom';


// const PrivateLayout = () => {
//     return (
//       <div>
//         <TopBar />
//         <div className="container">
//           <div className="menu-container">
//             <Menu />
//           </div>
//           <div className="dynamic-container">
//             <Routes>
//               <Route path="holdings" element={<Holdings />} />
//               <Route path="orders" element={<Orders />} />
//               <Route path="positions" element={<Positions />} />
//               {/* Add more routes here */}
//             </Routes>
//             <Outlet />
//           </div>
//         </div>
//         <Watchlist />
//       </div>
//     );
//   };


// export default PrivateLayout;


// const PrivateLayout = () => {
//   return (
//     <div>
//       <TopBar />
//       <div className="container">
//         <div className="menu-container">
//           <Menu />
//         </div>
//         <div className="dynamic-container">
//           <Outlet />
//         </div>
//       </div>
//       <Watchlist />
//     </div>
//   );
// };

// export default PrivateLayout;


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




