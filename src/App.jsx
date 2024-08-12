import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import TourPlanList from "./pages/TourPlanList";
import TourPlanDetails from "./pages/TourPlanDetail";
import Cart from "./pages/Cart";
import TicketDetails from "./pages/TicketDetails";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";

import CreateCategory from "./pages/CreateCategory";
import AdminLayout from "./layouts/AdminLayout";

import CreateTourPlans from "./pages/CreateTourPlan";
import ManageTickets from "./pages/ManageTickets";
import ManageUsers from "./pages/ManageUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";

function App() {
    return (
        <div className="font-inter">
            <Router>
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/tours" element={<TourPlanList />} />
                        <Route
                            path="/tours/:id"
                            element={<TourPlanDetails />}
                        />
                        <Route path="/cart" element={<Cart />} />
                        <Route
                            path="/tours/tickets"
                            element={<TicketDetails />}
                        />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/admin" element={<AdminLayout />}>
                            <Route path="/admin" element={<Dashboard />} />
                            <Route
                                path="categorys"
                                element={<CreateCategory />}
                            />
                            <Route path="tours" element={<CreateTourPlans />} />

                            <Route path="tickets" element={<ManageTickets />} />
                            <Route path="users" element={<ManageUsers />} />
                        </Route>
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
