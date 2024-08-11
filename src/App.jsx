import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import TourPlanList from "./pages/TourPlanList";
import TourPlanDetails from "./pages/TourPlanDetail";
import Cart from "./pages/Cart";
import TicketDetails from "./pages/TicketDetails";
import Checkout from "./pages/Checkout";

import CreateCategory from "./pages/CreateCategory";

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
            <Route path="/tours:id" element={<TourPlanDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/tours/tickets" element={<TicketDetails />} />
            <Route path="/checkout" element={<Checkout />} />

            <Route
              path="/admin/categorys/create"
              element={<CreateCategory />}
            />
            <Route path="/admin/tours/create" element={<CreateTourPlans />} />
            <Route path="/admin/tickets" element={<ManageTickets />} />
            <Route path="/admin/users" element={<ManageUsers />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
