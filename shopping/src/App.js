import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import Dashboard from "./Pages/User/Dashboard";
import PrivateRoute from "./Components/Routes/Private";
import About from "./Pages/About";
import AdminRoute from "./Components/Routes/AdminRoute";
import AdminDash from "./Pages/Admin/adminDash";
import CreateCategory from "./Pages/Admin/createCategory";
import CreateProduct from "./Pages/Admin/createProduct";
import Orders from "./Pages/User/Orders";
import Profiles from "./Pages/User/Profiles";
import SearchPage from "./Pages/SearchPage";
import SingleProductDetail from "./Pages/SingleProductDetail";
import SingleCollection from "./Pages/SingleCollection";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/searchPage" element={<SearchPage />} />
        <Route path="/productDetail/:slug" element={<SingleProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/singleCollection/:slug" element={<SingleCollection />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<Profiles />} />
          <Route path="user/order" element={<Orders />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDash />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
