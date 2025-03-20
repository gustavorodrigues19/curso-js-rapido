import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "./pages";
import DashboardPage from "./pages/dashboard";
import RequireAuth from "./RequireAuth";
import { AuthProvider } from "./context/auth";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
