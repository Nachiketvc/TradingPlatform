// import TopBar from "./TopBar";
// import WatchList from './WatchList';
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import styles from "../styles/Orders.module.css";




// const Orders = () => {
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         // Fetch all orders from the backend
//         axios
//             .get("http://localhost:3002/allOrders")
//             .then((response) => {
//                 setOrders(response.data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching orders:", error);
//             });
//     }, []);

//     return (
//         <div>
//             <TopBar />
//             <WatchList />
//             <div className={styles["orders-container"]}>
//                 <h3 className="title">Orders ({orders.length})</h3>
//                 <div className={styles["order-table"]}>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Product</th>
//                                 <th>Instrument</th>
//                                 <th>Qty.</th>
//                                 <th>Price</th>
//                                 <th>Type</th>
//                                 <th>Date</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {orders.map((order, index) => (
//                                 <tr key={index}>
//                                     <td>{order.product || "N/A"}</td>
//                                     <td>{order.name}</td>
//                                     <td>{order.qty}</td>
//                                     <td>{order.price.toFixed(2)}</td>
//                                     <td>{order.mode}</td>
//                                     <td>{order.createdAt ? new Date(order.createdAt).toLocaleString() : new Date().toLocaleString()}</td>
//                                     <td>
//                                         {order.createdAt
//                                             ? new Date(order.createdAt).toLocaleString()
//                                             : "N/A"}
//                                     </td>

//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Orders;


// import TopBar from "./TopBar";
// import WatchList from './WatchList';
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import styles from "../styles/Orders.module.css";

// const Orders = () => {
//     const [buyOrders, setBuyOrders] = useState([]);
//     const [sellOrders, setSellOrders] = useState([]);

//     useEffect(() => {
//         // Fetch all orders from the backend
//         axios
//             .get("http://localhost:3002/allOrders")
//             .then((response) => {
//                 const allOrders = response.data;

//                 // Filter orders based on type (Buy or Sell)
//                 setBuyOrders(allOrders.filter(order => order.mode === 'Buy'));
//                 setSellOrders(allOrders.filter(order => order.mode === 'Sell'));
//             })
//             .catch((error) => {
//                 console.error("Error fetching orders:", error);
//             });
//     }, []);

//     return (
//         <div>
//             <TopBar />
//             <WatchList />
//             <div className={styles["orders-container"]}>
//                 <h3 className="title">Buy Orders ({buyOrders.length})</h3>
//                 <div className={styles["order-table"]}>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Product</th>
//                                 <th>Instrument</th>
//                                 <th>Qty.</th>
//                                 <th>Price</th>
//                                 <th>Type</th>
//                                 <th>Date</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {buyOrders.map((order, index) => (
//                                 <tr key={index}>
//                                     <td>{order.product || "N/A"}</td>
//                                     <td>{order.name}</td>
//                                     <td>{order.qty}</td>
//                                     <td>{order.price.toFixed(2)}</td>
//                                     <td>{order.mode}</td>
//                                     <td>{order.createdAt ? new Date(order.createdAt).toLocaleString() : new Date().toLocaleString()}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>

//                 <h3 className="title">Sell Orders ({sellOrders.length})</h3>
//                 <div className={styles["order-table"]}>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Product</th>
//                                 <th>Instrument</th>
//                                 <th>Qty.</th>
//                                 <th>Price</th>
//                                 <th>Type</th>
//                                 <th>Date</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {sellOrders.map((order, index) => (
//                                 <tr key={index}>
//                                     <td>{order.product || "N/A"}</td>
//                                     <td>{order.name}</td>
//                                     <td>{order.qty}</td>
//                                     <td>{order.price.toFixed(2)}</td>
//                                     <td>{order.mode}</td>
//                                     <td>{order.createdAt ? new Date(order.createdAt).toLocaleString() : new Date().toLocaleString()}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Orders;




import TopBar from "./TopBar";
import WatchList from './WatchList';
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/Orders.module.css";

const Orders = () => {
    const [buyOrders, setBuyOrders] = useState([]);
    const [sellOrders, setSellOrders] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/allOrders`)
            .then((response) => {
                const allOrders = response.data;
                setBuyOrders(allOrders.filter((order) => order.mode === "BUY"));
                setSellOrders(allOrders.filter((order) => order.mode === "SELL"));
            })
            .catch((error) => {
                console.error("Error fetching orders:", error);
            });
    }, []);

    return (
        <div>
            <TopBar />
            <WatchList />
            <div className={styles["orders-container"]}>
                <h3 className="title">Buy Orders ({buyOrders.length})</h3>
                <div className={styles["order-table"]}>
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Instrument</th>
                                <th>Qty.</th>
                                <th>Price</th>
                                <th>Type</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {buyOrders.map((order, index) => (
                                <tr key={index}>
                                    <td>{order.name}</td>
                                    <td>{order.name}</td>
                                    <td>{order.qty}</td>
                                    <td>{order.price.toFixed(2)}</td>
                                    <td>{order.mode}</td>
                                    <td>
                                        {order.createdAt
                                            ? new Date(order.createdAt).toLocaleString()
                                            : new Date().toLocaleString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <h3 className="title">Sell Orders ({sellOrders.length})</h3>
                <div className={styles["order-table"]}>
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Instrument</th>
                                <th>Qty.</th>
                                <th>Price</th>
                                <th>Type</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sellOrders.map((order, index) => (
                                <tr key={index}>
                                    <td>{order.name}</td>
                                    <td>{order.name}</td>
                                    <td>{order.qty}</td>
                                    <td>{order.price.toFixed(2)}</td>
                                    <td>{order.mode}</td>
                                    <td>
                                        {order.createdAt
                                            ? new Date(order.createdAt).toLocaleString()
                                            : new Date().toLocaleString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;





