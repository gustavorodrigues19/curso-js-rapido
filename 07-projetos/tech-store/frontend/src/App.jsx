import { BrowserRouter, Routes, Route } from "react-router";
import ProductsPage from "./pages";
import CartPage from "./pages/cart";
import SignInPage from "./pages/sign-in";
import RegisterPage from "./pages/register";
import AccountDetailsPage from "./pages/account/details";
import AccountOrdersPage from "./pages/account/orders";
import Layout from "./components/Layout";
import ProductDetails from "./pages/products/details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CartPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account/details" element={<AccountDetailsPage />} />
          <Route path="/account/orders" element={<AccountOrdersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
