// import Orders from "./Orders";
// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import WatchList from "./WatchList";
// import Summary from "./Summary";
// import Funds from "./Funds";
// import Holdings from './Holdings';
// import Positions from './Positions';
// import App from './App';
// import { GeneralContextProvider } from "./GeneralContext";


// function DashBoard() {
//     return (
//         <div>
//             <GeneralContextProvider>
//             <WatchList />
//             </GeneralContextProvider>
//             <Routes>
//                 <Route path="/" element={<Summary />} />
//                 <Route path="/orders" element={<Orders />} />
//                 <Route path="/holdings" element={<Holdings />} />
//                 <Route path="/positions" element={<Positions />} />
//                 <Route path="/funds" element={<Funds />} />
//                 <Route path="/app" element={<App />} />
//             </Routes>
//         </div>
//     );
// }

// export default DashBoard;


import Orders from "./Orders";
import React from "react";
import { Route, Routes } from "react-router-dom";
import WatchList from "./WatchList";
import Summary from "./Summary";
import Holdings from './Holdings';
import Positions from './Positions';
import App from './App';
import { GeneralContextProvider } from "./GeneralContext";
import FeedbackForm from "./FeedbackForm";

function DashBoard() {
    return (
        <GeneralContextProvider>
            <div>
                <WatchList />
                <Routes>
                    <Route path="/home" element={<Summary />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/holdings" element={<Holdings />} />
                    <Route path="/positions" element={<Positions />} />
                    <Route path="/feedback" element={<FeedbackForm />} />
                    <Route path="/app" element={<App />} />
                </Routes>
            </div>

        </GeneralContextProvider>
    );
}

export default DashBoard;




