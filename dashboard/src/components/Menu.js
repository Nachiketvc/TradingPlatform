// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Menu() {
//   const [isselectedmenu, setisSelectedMenu] = useState(0);
//   const navigate = useNavigate();

//   const handleMenuClick = (index) => {
//     setisSelectedMenu(index);
//   };

//   const handleLogOut = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('loggedInUser');
//     setTimeout(() => {
//       navigate('/');
//     }, 1000);
//   };

//   return (
//     <div className="menu-container">
//       <img src="images/da.jpg" style={{width: '65px', marginTop: '-1px', marginLeft: '25px'}}></img>
//       <Link to="/home" onClick={() => handleMenuClick(0)} className={isselectedmenu === 0 ? "menu-item active" : "menu-item"} style={{marginLeft:'40px'}}>Dashboard</Link>
//       <Link to="/orders" onClick={() => handleMenuClick(1)} className={isselectedmenu === 1 ? "menu-item active" : "menu-item"}>Orders</Link>
//       <Link to="/holdings" onClick={() => handleMenuClick(2)} className={isselectedmenu === 2 ? "menu-item active" : "menu-item"}>Holdings</Link>
//       <Link to="/positions" onClick={() => handleMenuClick(3)} className={isselectedmenu === 3 ? "menu-item active" : "menu-item"}>Positions</Link>
//       <Link to="/feedback" onClick={() => handleMenuClick(4)} className={isselectedmenu === 4 ? "menu-item active" : "menu-item"}>Feedback</Link>
//       <Link to="/app" onClick={() => handleMenuClick(5)} className={isselectedmenu === 5 ? "menu-item active" : "menu-item"} >News</Link>
//       <button className="logout-button" onClick={handleLogOut} style={{marginLeft:'80px'}}>Log Out</button>
//     </div>
//   );
// }

// export default Menu;

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../index.css';

function Menu() {
  const [isselectedmenu, setisSelectedMenu] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Update active menu based on the current route
  useEffect(() => {
    const pathToIndex = {
      "/home": 0,
      "/orders": 1,
      "/holdings": 2,
      "/positions": 3,
      "/feedback": 4,
      "/app": 5,
    };
    setisSelectedMenu(pathToIndex[location.pathname] ?? 0);
  }, [location.pathname]);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="menu-container">
      <img
        src="images/da.jpg"
        style={{ width: "65px", marginTop: "-1px", marginLeft: "25px" }}
        alt="Logo"
      />
      <Link
        to="/home"
        className={isselectedmenu === 0 ? "menu-item active" : "menu-item"}
        style={{ marginLeft: "40px" }}
      >
        Dashboard
      </Link>
      <Link
        to="/orders"
        className={isselectedmenu === 1 ? "menu-item active" : "menu-item"}
      >
        Orders
      </Link>
      <Link
        to="/holdings"
        className={isselectedmenu === 2 ? "menu-item active" : "menu-item"}
      >
        Holdings
      </Link>
      <Link
        to="/positions"
        className={isselectedmenu === 3 ? "menu-item active" : "menu-item"}
      >
        Positions
      </Link>
      <Link
        to="/feedback"
        className={isselectedmenu === 4 ? "menu-item active" : "menu-item"}
      >
        Feedback
      </Link>
      <Link
        to="/news"
        className={isselectedmenu === 5 ? "menu-item active" : "menu-item"}
      >
        News
      </Link>
      <button
        className="logout-button"
        onClick={handleLogOut}
        style={{ marginLeft: "80px" }}
      >
        Log Out
      </button>
    </div>
  );
}

export default Menu;















