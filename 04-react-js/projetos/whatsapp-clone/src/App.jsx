import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages";
import ChatsPage from "./pages/chats";
import AuthContextProvider from "./context/auth";

export default function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chats" element={<ChatsPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}
