// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";




// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/home*" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );





import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './home/Homepage';
import Signup from './signup/Signup';
import AboutPage from './about/AboutPage';
import ProductPage from './products/ProductPage';
import PricingPage from './pricing/PricingPage';
import SupportPage from './support/SupportPage';
import NotFound from './others/NotFound';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './signup/Login';
import 'react-toastify/ReactToastify.css';
import PrivateRoute from "./components/PrivateRoute";
import Holdings from "./components/Holdings";
import Orders from "./components/Orders";
import Positions from "./components/Positions";
import App from "./components/App";
import FeedbackForm from "./components/FeedbackForm";




// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <BrowserRouter>
//     <Routes>
//       {/* Define routes here */}
//       <Route path="/" element={<HomePage />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/about" element={<AboutPage />} />
//       <Route path="/product" element={<ProductPage />} />
//       <Route path="/pricing" element={<PricingPage />} />
//       <Route path="/support" element={<SupportPage />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//     <Footer />
//   </BrowserRouter>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<HomePage />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/product" element={<ProductPage />} />
//         <Route path="/pricing" element={<PricingPage />} />
//         <Route path="/support" element={<SupportPage />} />
//         <Route path="*" element={<NotFound />} />

//         {/* Private Routes */}
//         <Route path="/home*" element={<PrivateRoute />}>
//             <Route index element={<Home />} />
//             <Route path="holdings" element={<Holdings />} />
//             <Route path="orders" element={<Orders />} />
//             <Route path="positions" element={<Positions />} />
//             {/* Add more routes here */}
//         </Route>
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   </React.StrictMode>
// );


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/news" element={<App />} />
          {/* Add more routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);




