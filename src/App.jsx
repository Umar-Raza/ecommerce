import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from "./pages/home/Home";
import { NoPage } from "./pages/noPage/NoPage";
import { ProductInfo } from "./pages/productInfo/ProductInfo";
import { ScrollTop } from "./components/scrollTop/ScrollTop";
import { CartPage } from "./pages/cart/CartPage";
import { AllProduct } from "./pages/allProduct/AllProduct";
import { Login } from "./pages/registration/Login";
import { Signup } from "./pages/registration/Signup";
import { UserDashboard } from "./pages/userDashboard/UserDashboard";
import { SearchBar } from "./components/searchBar/SearchBar";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AddProduct } from "./pages/admin/AddProduct";
import { EditProduct } from "./components/admin/EditProduct";

const App = () => {
  return (
    <div>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productInfo" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allProduct" element={<AllProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/searchBar" element={<SearchBar />} />
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/editProduct" element={<EditProduct />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;