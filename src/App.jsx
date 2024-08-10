import Layout from "./layouts/Layout";
import Home from "./pages/user/Home";
import TourPlanList from "./pages/user/TourPlanList";
import TourPlanDetails from "./pages/user/TourPlanDetail";
import Cart from "./pages/user/Cart";
import TicketDetails from "./pages/user/TicketDetails";
import Checkout from "./pages/user/Checkout";

import CreateCategory from "./pages/admin/CreateCategory";

import CreateTourPlans from "./pages/admin/CreateTourPlan";
import ManageTickets from "./pages/admin/ManageTickets";
import ManageUsers from "./pages/admin/ManageUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/tours" element={<TourPlanList />} />
                    <Route path="/tours:id" element={<TourPlanDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/tours/tickets" element={<TicketDetails />} />
                    <Route path="/checkout" element={<Checkout />} />

                    <Route
                        path="/admin/categorys/create"
                        element={<CreateCategory />}
                    />
                    <Route
                        path="/admin/tours/create"
                        element={<CreateTourPlans />}
                    />
                    <Route path="/admin/tickets" element={<ManageTickets />} />
                    <Route path="/admin/users" element={<ManageUsers />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
